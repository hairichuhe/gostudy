// pointer
package main

import (
	"fmt"
)

func main() {
	var a int = 20

	ip := &a

	fmt.Printf("a变量的地址是：%x\n", &a)
	fmt.Printf("ip变量的地址是：%x\n", ip)
	fmt.Printf("a变量的地址是：%d\n", *ip)
}
