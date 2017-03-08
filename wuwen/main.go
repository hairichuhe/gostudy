// Echo1 prints its command-line arguments.
package main

import (
	"fmt"
	"utils/path"
)

func main() {
	s, _ := path.GetCurrentPath()
	fmt.Println(s)
}
