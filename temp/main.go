package main // queryip project main.go

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	startHttpServer()
}

// w表示response对象，返回给客户端的内容都在对象里处理
// r表示客户端请求对象，包含了请求头，请求参数等等
func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "请传入参数！")
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
