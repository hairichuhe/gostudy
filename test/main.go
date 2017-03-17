// tcptest
package main

import (
	"encoding/json"
	"fmt"
	"net"
	"os"
	"strconv"
	"strings"

	"utils/path"
)

type Event struct {
	Code int    //100 更新关键词   200 网站扫描
	Obj  string //100传文件  200传网站url
}

type File struct {
	Path    string
	SinSize int
	Size    int
	SinNum  int
}

func main() {
	fmt.Println("Starting the server...")
	listener, err := net.Listen("tcp", "0.0.0.0:50000")
	if err != nil {
		fmt.Println("Listen Error:", err.Error())
		return
	}
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Accept Error:", err.Error())
			return
		}
		go taskIn(conn)
	}
	defer listener.Close()
}

func taskIn(conn net.Conn) {
	remote := conn.RemoteAddr().String()
	fmt.Println(remote, " connected!")
	buf := make([]byte, 512)
	size, err := conn.Read(buf)
	if err != nil {
		fmt.Println("Read Error:", err.Error())
	}
	var event Event
	err = json.Unmarshal(buf[:size], &event)
	if err != nil {
		fmt.Println("Unmarshal Error:", err.Error())
		return
	}
	fmt.Println("Person after Unmarshal:", event)
	//		conn.Write([]byte("[{"))

	fmt.Println(event.Code)
	switch event.Code {
	case 100:
		fmt.Println("100")
	case 200:
		fileTo(conn, event.Obj)
	default:
		fmt.Println("I don't konw!")
	}
	//	conn.Close()
}

func fileTo(conn net.Conn, fileInfo string) {
	fileInfo = strings.Replace(fileInfo, "&", "\"", -1)
	fileInfo = strings.Replace(fileInfo, "@", ":", -1)
	fileInfo = "{" + fileInfo + "}"
	var file File
	err := json.Unmarshal([]byte(fileInfo), &file)
	if err != nil {
		fmt.Println("Unmarshal Error:", err.Error())
	}
	nowPath, _ := path.GetCurrentPath()
	wordFile := nowPath + "badWord.txt"
	pFile, err := os.OpenFile(wordFile, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		panic("File '" + wordFile + "' in PipelineFile open failed.")
	}
	i := 0
	conn.Write([]byte("{\"next\":" + strconv.Itoa(i) + "}"))
	fmt.Println(file.SinNum)
	for {
		i++
		if i == file.SinNum {
			conn.Close()
			break
		} else {
			buf := make([]byte, 1024)
			size, err := conn.Read(buf)
			if err != nil {
				fmt.Println("Read Error:", err.Error())
				return
			}
			_, err = pFile.Write(buf[:size])
			if err != nil {
				fmt.Println("写入文件出错！")
			} else {
				conn.Write([]byte("{\"next\":" + strconv.Itoa(i) + "}"))
			}
		}
	}
}
