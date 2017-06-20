// fileUp project main.go
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

func upload(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	if r.Method == "POST" {
		file, handle, err := r.FormFile("file")
		checkErr(err)
		f, err := os.OpenFile("./test/"+handle.Filename, os.O_WRONLY|os.O_CREATE, 0666)
		io.Copy(f, file)
		checkErr(err)
		defer f.Close()
		defer file.Close()
		fmt.Println("上传成功！")
		w.Write([]byte("上传成功"))
	}
}

func checkErr(err error) {
	if err != nil {
		err.Error()
	}
}

func main() {
	http.HandleFunc("/upload", upload)
	err := http.ListenAndServe(":8888", nil)
	if err != nil {
		log.Fatal("listenAndServe: ", err)
	}
}
