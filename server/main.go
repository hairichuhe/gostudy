// server project main.go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/html/", http.StripPrefix("/", http.FileServer(http.Dir("C:/Users/jerry/AppData/Local/.fis3-tmp/www"))))
	fmt.Println("server start at 127.0.0.1:8081")
	http.ListenAndServe(":8081", nil)
}
