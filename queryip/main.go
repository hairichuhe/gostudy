package main // queryip project main.go

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"strings"

	"utils/httputil"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

type sqlModel struct {
	ip        string
	city      string
	province  string
	location  string
	citycode  string
	rectangle string
}

func init() {
	db, _ = sql.Open("mysql", "hairichuhe:520wsy@tcp(db4free.net:3306)/hairichuhe?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
}

func main() {
	startHttpServer()
}

// w表示response对象，返回给客户端的内容都在对象里处理
// r表示客户端请求对象，包含了请求头，请求参数等等
func index(w http.ResponseWriter, r *http.Request) {

	// 往w里写入内容，就会在浏览器里输出
	sql := sqlModel{"", "", "", "", "", ""}
	r.ParseForm()
	if len(r.Form["ip"]) > 0 {
		sql.ip = r.Form["ip"][0]
		locationstr := query(r.Form["ip"][0])
		if len(locationstr) == 0 {
			result := getIp(r.Form["ip"][0])
			sql.city = handleStr(result, "\"city\":\"")
			sql.province = handleStr(result, "\"province\":\"")
			sql.rectangle = handleStr(result, "\"rectangle\":\"")
			locationstr := getLoaction(sql.city)
			sql.citycode = handleStr(locationstr, "\"citycode\":\"")
			sql.location = handleStr(locationstr, "\"location\":\"")
			insert(sql)
			fmt.Fprintf(w, sql.location)
		} else {
			fmt.Fprintf(w, locationstr)
		}
	} else {
		fmt.Fprintf(w, "请传入参数！")
	}
}

func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}

func startHttpServer() {
	// 设置路由，如果访问/，则调用index方法
	http.HandleFunc("/", index)
	fmt.Println("listen start at port 9090!")
	// 启动web服务，监听9090端口
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func getIp(ip string) string {
	url := "http://restapi.amap.com/v3/ip?key=57b4173ef81af17fa6e93aceb24ff751&ip=" + ip + "&output=JSON"
	return httputil.HttpGet(url)
}

func getLoaction(city string) string {
	url := "http://restapi.amap.com/v3/geocode/geo?key=57b4173ef81af17fa6e93aceb24ff751&address=" + city + "&output=JSON"
	return httputil.HttpGet(url)
}

func handleStr(all string, target string) string {
	start := strings.Index(all, target) + len(target)
	newStr := all[start:]
	end := strings.Index(newStr, "\"")
	return newStr[:end]
}

func insert(sql sqlModel) {
	stmt, err := db.Prepare(`INSERT ip_location (ip,city,province,location,citycode,rectangle) values (?,?,?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)
	_, err1 := stmt.Exec(sql.ip, sql.city, sql.province, sql.location, sql.city, sql.rectangle)
	checkErr(err1)
}

func query(ip string) string {
	var location string
	rows, err := db.Query("SELECT location FROM ip_location WHERE ip='" + ip + "'")
	defer rows.Close()
	checkErr(err)

	for rows.Next() {
		rows.Columns()
		err = rows.Scan(&location)
		checkErr(err)

		break
	}
	return location
}
