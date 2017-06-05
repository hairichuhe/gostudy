package main

import (
	"fmt"
	"net"
	"time"
)

func main() {
	checkReachable("udp", "192.168.0.119:161")
}

func checkReachable(proto, addr string) {
	c := make(chan error)
	timeout, _ := time.ParseDuration("1s")
	_, err := net.DialTimeout(proto, addr, timeout)
	c <- err
	for i := range c {
		fmt.Println(i)
	}
	//	if err == nil {
	//		c.Close()
	//		fmt.Println("%s://%s is alive and reachable", proto, addr)
	//	} else {
	//		fmt.Println("出错了！")
	//	}
}
