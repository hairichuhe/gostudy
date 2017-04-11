// server project main.go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./html/")))
	fmt.Println("server start at 127.0.0.1:8081")
	http.ListenAndServe(":8081", nil)
}
