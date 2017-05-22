// netscan project main.go
package main

import (
	"database/sql"
	"fmt"
	"net"
	"netscan/protocol"
	"strconv"
	"sync"
	"time"
	"utils/gateway"

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
	gatew   string
	order   int
	gatewId int
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
	ip       string
	parentId int
	mold     int
	orders   int
}

func checkReachable(proto, addr string) {
	switch proto {
	case "ip4:icmp":
		if protocol.Ping(addr) {
			sql := sqlModel{addr, gatewId, 0, order}
			logrus.Infof("%s://%s is alive and reachable", proto, addr)
			if addr != gatew {
				insert(sql)
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

func scan(s string) {
	ip, ipNet, err := net.ParseCIDR(s)
	if err != nil {
		ip = net.ParseIP(s)
		scanIP(ip.String())
		return
	}
	for ip := ip.Mask(ipNet.Mask); ipNet.Contains(ip); incIP(ip) {
		wg.Add(1)
		go func(ip string) {
			defer wg.Done()

			scanIP(ip)
		}(ip.String())
	}

	wg.Wait()
}

func incIP(ip net.IP) {
	for j := len(ip) - 1; j >= 0; j-- {
		ip[j]++
		if ip[j] > 0 {
			break
		}
	}
}

func main() {
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

	//获取网关ip
	ip, _ := gateway.DiscoverGateway()
	gatew = ip.String()

	//获取扫描次数
	orders := queryOrder()
	nowNum, _ := strconv.Atoi(orders)
	order = nowNum + 1
	gatewsql := sqlModel{gatew, -1, 1, order}
	gatewId = insert(gatewsql)
	scan("192.168.0.1/24")
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
	stmt, err := db.Prepare(`INSERT netasset (ip,parent_id,type,orders) values (?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)
	result, err1 := stmt.Exec(sql.ip, sql.parentId, sql.mold, sql.orders)
	checkErr(err1)
	id, _ := result.LastInsertId()
	return int(id)
}
func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}
