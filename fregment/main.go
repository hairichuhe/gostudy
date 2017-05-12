// fregment project main.go
package main

import (
	"fmt"
	"utils/gateway"
)

func main() {
	ip, _ := gateway.DiscoverGateway()
	fmt.Println(ip)
}
