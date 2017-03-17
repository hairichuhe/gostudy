package main

import (
	"fmt"
)

func main() {
	str := "lalala"
	var data []byte
	data = []byte(str)
	fmt.Println(len(data))
}
