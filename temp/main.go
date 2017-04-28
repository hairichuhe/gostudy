package main // queryip project main.go

import (
	"fmt"
	"io/ioutil"
	"utils/path"

	"github.com/bitly/go-simplejson"
)

//读取文件需要经常进行错误检查，这个帮助方法可以精简下面的错误检查过程。
func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	//也许大部分基本的文件读取任务是将文件内容读取到内存中。
	nowPath, _ := path.GetCurrentPath()
	dat, err := ioutil.ReadFile(nowPath + "conf.json")
	check(err)
	js, _ := simplejson.NewJson(dat)
	menu, _ := js.Get("menu").MarshalJSON()
	fmt.Println(string(menu))
	fmt.Print(string(dat))
}
