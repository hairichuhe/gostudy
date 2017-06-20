// netscan project main.go
package main

import (
	"database/sql"
	"fmt"
	"math"
	"net"
	"netscan/protocol"
	"sync"
	"time"
	"utils/snmp"

	"github.com/BurntSushi/toml"
	"github.com/Sirupsen/logrus"
	_ "github.com/go-sql-driver/mysql"
)

var (
	protos  []string
	timeout time.Duration
	config  tomlConfig
	db      *sql.DB
	wg      sync.WaitGroup
	taskId  int
	com     int
)

type tomlConfig struct {
	DB database `toml:"database"`
}

type database struct {
	Server   string
	Username string
	Password string
	Dataname string
}

type sqlModel struct {
	start  time.Time
	end    time.Time
	total  int
	finish int
	ip     string
}

type assestModel struct {
	ip       string
	gateway  string
	netmask  string
	sysdescr string
	snmpopen int
	taskid   int
}

func main() {
	initMain()
	task := sqlModel{time.Now(), time.Now(), 0, 0, "192.168.0.1/24"}
	taskId = insert(task)
	all := scan("192.168.0.1/24")
	updateAsset(taskId, "total_ip=?", all)
	wg.Wait()
	updateAsset(taskId, "finish_ip=?", all)
	com = 0
}

func initMain() {
	if _, err := toml.DecodeFile("./netscan-conf.toml", &config); err != nil {
		fmt.Println(err)
		return
	}
	//	go restconf()
	db, _ = sql.Open("mysql", config.DB.Username+":"+config.DB.Password+"@tcp("+config.DB.Server+")/"+config.DB.Dataname+"?charset=utf8")
	//	db, _ = sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/api?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
	protos = []string{"ip4:icmp"}
	timeo, err := time.ParseDuration("1s")
	if err != nil {
		fmt.Println(err)
	} else {
		timeout = timeo
	}
}

func checkReachable(proto, addr string) {
	switch proto {
	case "ip4:icmp":
		if protocol.Ping(addr) {
			var sql assestModel
			sql.ip = addr
			sql.taskid = taskId
			if snmp.Issnmp(addr) {
				sql.snmpopen = 1
				result := snmp.Mib(addr)
				sql.gateway = result.Gateway
				sql.netmask = result.NetMask
				sql.sysdescr = result.SysDescr
			} else {
				sql.snmpopen = 0
			}
			insertAsset(sql)
			com++
			if float64(0) == math.Mod(float64(com), float64(3)) {
				updateAsset(taskId, "finish_ip=?", com)
			}
			return
		}
		logrus.Infof(addr + "此机器未开启！")
	default:
		fmt.Printf("暂无此协议！")
	}
}

func scanIP(ip string) {
	for _, proto := range protos {
		checkReachable(proto, ip)
	}
}

func scan(s string) int {
	ip, ipNet, err := net.ParseCIDR(s)
	if err != nil {
		ip = net.ParseIP(s)
		scanIP(ip.String())
		return 1
	}
	for ip := ip.Mask(ipNet.Mask); ipNet.Contains(ip); incIP(ip) {
		wg.Add(1)
		go func(ip string) {
			defer wg.Done()

			scanIP(ip)
		}(ip.String())
	}
	par, all := ipNet.Mask.Size()
	return int(math.Pow(float64(2), float64(all-par)))
}

func incIP(ip net.IP) {
	for j := len(ip) - 1; j >= 0; j-- {
		ip[j]++
		if ip[j] > 0 {
			break
		}
	}
}

func queryOrder() string {
	var order sql.RawBytes
	rows, err := db.Query("SELECT MAX(orders) FROM netasset")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
	}
	//	fmt.Println(len(rows))
	for rows.Next() {
		rows.Columns()
		err := rows.Scan(&order)
		if err != nil {
			fmt.Println(err)
		}

		break
	}
	if order == nil {
		return "0"
	} else {
		return string(order)
	}
}

func insert(sql sqlModel) int {
	stmt, err := db.Prepare(`INSERT task (start_time,end_time,total_ip,finish_ip,ip_string) values (?,?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)
	result, err1 := stmt.Exec(sql.start, sql.end, sql.total, sql.finish, sql.ip)
	checkErr(err1)
	id, _ := result.LastInsertId()
	return int(id)
}

func insertAsset(sql assestModel) int {
	stmt, err := db.Prepare(`INSERT assest (ip,gateway,netmask,sysdescr,snmpopen,taskid) values (?,?,?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)
	result, err1 := stmt.Exec(sql.ip, sql.gateway, sql.netmask, sql.sysdescr, sql.snmpopen, sql.taskid)
	checkErr(err1)
	id, _ := result.LastInsertId()
	return int(id)
}

func updateAsset(id int, q string, v int) {
	stmt, err := db.Prepare("UPDATE task SET " + q + " WHERE id=?")
	defer stmt.Close()
	checkErr(err)
	_, err1 := stmt.Exec(v, id)
	checkErr(err1)
}

func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}
