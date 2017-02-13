// arr
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var n [10]int
	var i, j int

	for i = 0; i < 10; i++ {
		n[i] = i + 100
	}

	for j = 0; j < 10; j++ {
		fmt.Printf("element[%d]=%d\n", j, n[j])
	}

	var balance = []float32{1000.0, 2.0, 3.4, 7.0, 50.0}
	s := []int{1, 2, 3}
	balance = append(balance, 99.6)
	fmt.Println(balance)
	fmt.Println("type:", reflect.TypeOf(balance))
	fmt.Println("type:", reflect.TypeOf(s))
}
