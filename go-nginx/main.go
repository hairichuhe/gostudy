// go-nginx project main.go
package main

import (
	_ "blitznote.com/src/caddy.upload"
	"github.com/mholt/caddy/caddy/caddymain"
)

var run = caddymain.Run // replaced for tests

func main() {
	run()
}
