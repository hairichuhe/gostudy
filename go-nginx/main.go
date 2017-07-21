// go-nginx project main.go
package main

import (
	"github.com/mholt/caddy/caddy/caddymain"
)

var run = caddymain.Run // replaced for tests

func main() {
	run()
}
