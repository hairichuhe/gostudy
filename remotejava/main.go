// remotejava project main.go
package main

import (
	"encoding/json"
	"fmt"
	"net"
)

type Person struct {
	Name string
	Id   int
	Lks  []string
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
		//fmt.Println("data from client:",string(buf),"size:",size)
		var person Person
		err = json.Unmarshal(buf[:size], &person)
		if err != nil {
			fmt.Println("Unmarshal Error:", err.Error())
			return
		}
		fmt.Println("Person after Unmarshal:", person)
		person.Id += 2
		buf, err = json.Marshal(person)
		fmt.Println("personID:", person.Id)
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
