// Echo1 prints its command-line arguments.
package main

import (
	"fmt"
	"net/url"
)

func main() {
	s := "毛泽东"
	fmt.Println(url.QueryEscape(s))
}
