package main // queryip project main.go

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func init() {
	db, _ = sql.Open("mysql", "root:root@tcp(localhost:3306)/api?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
}

// w表示response对象，返回给客户端的内容都在对象里处理
// r表示客户端请求对象，包含了请求头，请求参数等等
func index(w http.ResponseWriter, r *http.Request) {
	stmt, err := db.Prepare(`INSERT ip_location (ip,city,provice,location,citycode,rectangle) values (?,?,?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)

	// 往w里写入内容，就会在浏览器里输出
	r.ParseForm()
	if len(r.Form["ip"]) > 0 {
		res, err := stmt.Exec("111", "111", "111", "111", "111", "111")
		checkErr(err)
		id, err := res.LastInsertId()
		checkErr(err)
		fmt.Println(id)
		fmt.Fprintf(w, strconv.Itoa(id))
	} else {
		fmt.Fprintf(w, "请传入参数！")
	}
}

func main() {
	startHttpServer()
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
