// funcptr
package main

import (
	"fmt"
)

func main() {
	var a int = 100
	var b int = 200

	fmt.Printf("交换前a的值：%d\n", a)
	fmt.Printf("交换前b的值：%d\n", b)

	swap(&a, &b)
	fmt.Printf("交换后a的值：%d\n", a)
	fmt.Printf("交换后b的值：%d\n", b)
}

func swap(x *int, y *int) {
	var temp int
	temp = *x
	*x = *y
	*y = temp
}
