// testtcp
package main

import (
	"fmt"
	"net"
)

func main() {
	fmt.Println("Starting the server...")
	listener, err := net.Listen("tcp", "0.0.0.0:50000")
	if err != nil {

		fmt.Println("Listen Error:", err.Error())
		return
	}
	defer listener.Close()
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Accept Error:", err.Error())
			return
		}
		go taskIn(conn)
	}
}

func taskIn(conn net.Conn) {
	remote := conn.RemoteAddr().String()
	fmt.Println(remote, " connected!")
	conn.Close()
}
