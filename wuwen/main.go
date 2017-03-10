// Echo1 prints its command-line arguments.
package main

import (
	"encoding/json"
	"fmt"
	"net"
)

type Event struct {
	Code int    //100 网站扫描   200 更新关键词
	Obj  string //100传网站url  200传文件
}

func doServerStuff(conn net.Conn) {
	remote := conn.RemoteAddr().String()
	fmt.Println(remote, " connected!")
	for {
		buf := make([]byte, 512)
		size, err := conn.Read(buf)
		if err != nil {
			fmt.Println("Read Error:", err.Error())
			return
		}
		fmt.Println("data from client:", string(buf), "size:", size)
		var event Event
		err = json.Unmarshal(buf[:size], &event)
		if err != nil {
			fmt.Println("Unmarshal Error:", err.Error())
			return
		}
		fmt.Println("Person after Unmarshal:", event)
		buf, err = json.Marshal(event)
		if err != nil {
			fmt.Println("Marshal Error:", err.Error())
			return
		}
		conn.Write(buf)
		conn.Close()
		break
	}
}
func main() {
	fmt.Println("Starting the server...")
	listener, err := net.Listen("tcp", "0.0.0.0:50000")
	if err != nil {
		fmt.Println("Listen Error:", err.Error())
		return
	}
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Accept Error:", err.Error())
			return
		}
		go doServerStuff(conn)
	}
}
