// gethead project main.go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func startHttpServer() {
	// 设置路由，如果访问/，则调用index方法
	http.HandleFunc("/", index)
	http.HandleFunc("/aaa", index)
	log.Fatal(http.ListenAndServe(":80", nil))
}

// w表示response对象，返回给客户端的内容都在对象里处理
// r表示客户端请求对象，包含了请求头，请求参数等等
func index(w http.ResponseWriter, r *http.Request) {

	// 往w里写入内容，就会在浏览器里输出
	//	r.ParseForm()
	fmt.Println(r.RemoteAddr)
	fmt.Fprintf(w, "传输成功！")
}

func main() {
	startHttpServer()
}
