package main

import (
	_ "chat/routers"

	"github.com/astaxie/beego"
)

func main() {
	beego.SetStaticPath("/gochat", "static")
	beego.Run()
}
