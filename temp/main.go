package main // queryip project main.go

import (
	"fmt"
	"time"

	"github.com/bitly/go-simplejson"
)

func main() {
	fmt.Println(time.Now().Unix())
	aaa()
}

func aaa() {
	str := `{"errcode":0,"errmsg":"ok"}`
	str1 := `{"errcode":40013,"errmsg":"invalid appid"}`
	js, _ := simplejson.NewJson([]byte(str))
	js1, _ := simplejson.NewJson([]byte(str1))

	t, _ := js.Get("errcode").Int()
	t1, _ := js1.Get("access_token").String()

	fmt.Println(t)
	fmt.Println(t1 == "")
}
