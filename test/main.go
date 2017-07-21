package main

import (
	"fmt"
	"math"
	"net"
)

func main() {
	//	scan("192.168.0.1/24")
	//	fmt.Println(float64(0) == math.Mod(float64(10), float64(5)))
	fmt.Println(9.9 * 6)
}

func scan(s string) {
	ip, ipNet, err := net.ParseCIDR(s)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(ip)
	fmt.Println(ipNet.Mask.Size())
	par, all := ipNet.Mask.Size()
	fmt.Println(math.Pow(float64(2), float64(all-par)))
}
