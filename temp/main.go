// test_query project main.go
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func myToken(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.RemoteAddr)
	io.WriteString(w, "万万没想到，啦啦啦！")
	fmt.Println(1)
}

func main() {
	http.HandleFunc("/api/user", myToken)
	log.Fatal(http.ListenAndServe(":9094", nil))
}
