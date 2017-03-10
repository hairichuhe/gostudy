// Echo1 prints its command-line arguments.
package main

import (
	"encoding/json"
	"fmt"
	"net"
	"net/url"
	"os"
	"strings"
	"utils/path"

	"github.com/PuerkitoBio/goquery"
	"github.com/hu17889/go_spider/core/common/page"
	"github.com/hu17889/go_spider/core/pipeline"
	"github.com/hu17889/go_spider/core/spider"

	str "utils/strings"
)

type Event struct {
	Code int    //100 更新关键词   200 网站扫描
	Obj  string //100传文件  200传网站url
}

//组装url(组)
func toUrl(a []string) []string {
	tempUrl := make([]string, 256)
	i := 0
	tempStr := "("
	for t, word := range a {
		if i == 3 || t == len(a) {
			tempStr += word + ")"
			tempUrl = append(tempUrl, "http://cn.bing.com/search?q="+url.QueryEscape(tempStr)+"+site%3A"+url.QueryEscape("http://www.imooc.com")+"&go=%E6%90%9C%E7%B4%A2&qs=bs&form=QBRE")
			tempStr = "("
			i = 0
		} else {
			tempStr += word + "|"
			i++
		}
	}
	return tempUrl
}

//组装url（单一）
func toSingleUrl(s string) []string {
	tempUrl := make([]string, 8)
	start := strings.Index(s, "(") + 1
	end := strings.Index(s, ")")
	news := s[start:end]
	newarr := strings.Split(news, "|")
	for _, word := range newarr {
		tempUrl = append(tempUrl, "http://cn.bing.com/search?q="+url.QueryEscape(word)+"+site%3A"+url.QueryEscape("http://www.imooc.com")+"&go=%E6%90%9C%E7%B4%A2&qs=bs&form=QBRE")
	}
	return tempUrl
}

type MyPageProcesser struct {
}

func NewMyPageProcesser() *MyPageProcesser {
	return &MyPageProcesser{}
}

// Parse html dom here and record the parse result that we want to Page.
// Package goquery (http://godoc.org/github.com/PuerkitoBio/goquery) is used to parse html.
func (this *MyPageProcesser) Process(p *page.Page) {
	if !p.IsSucc() {
		println(p.Errormsg())
		return
	}
	query := p.GetHtmlParser()
	urls := ""
	target := query.Find("ol#b_results li.b_algo h2 a")
	if target.Length() > 0 {
		rs, _ := url.ParseQuery(p.GetRequest().GetUrl())
		if strings.Index(rs["http://cn.bing.com/search?q"][0], "(") < 0 {
			target.Each(func(i int, s *goquery.Selection) {
				href, _ := s.Attr("href")
				urls += href + ","
			})
			urls = urls[0 : len(urls)-1]
			start := strings.Index(rs["http://cn.bing.com/search?q"][0], "\"")
			end := strings.Index(rs["http://cn.bing.com/search?q"][0], " ")
			badWord := rs["http://cn.bing.com/search?q"][0][start:end]

			p.AddField("badWord", badWord)
			p.AddField("urls", urls)
		} else {
			urls := toSingleUrl(rs["http://cn.bing.com/search?q"][0])
			p.AddTargetRequests(urls, "html")
		}
	} else {
		p.SetSkip(true)
	}
}

func (this *MyPageProcesser) Finish() {
	fmt.Printf("TODO:before end spider \r\n")
}

func taskIn(conn net.Conn) {
	remote := conn.RemoteAddr().String()
	fmt.Println(remote, " connected!")
	for {
		buf := make([]byte, 512)
		size, err := conn.Read(buf)
		if err != nil {
			fmt.Println("Read Error:", err.Error())
			return
		}
		var event Event
		err = json.Unmarshal(buf[:size], &event)
		if err != nil {
			fmt.Println("Unmarshal Error:", err.Error())
			return
		}
		fmt.Println("Person after Unmarshal:", event)
		//		conn.Write([]byte("[{"))
		switch event.Code {
		case 100:
			fmt.Println("100")
		case 200:
			doSpider(event.Obj, conn)
		default:
			fmt.Println("I don't konw!")
		}

		//		conn.Write([]byte("}]"))
		conn.Close()
		break
	}
}

func doSpider(url string, conn net.Conn) {

	mySpider := spider.NewSpider(NewMyPageProcesser(), "敏感词对应网址扒取")

	nowPath, _ := path.GetCurrentPath()
	userFile := nowPath + "test.txt"
	//	userFile := "D:/go_workspace/bin/" + "test.txt"
	fin, err := os.Open(userFile)
	defer fin.Close()
	if err != nil {
		fmt.Println(userFile, err)
		return
	}
	buf := make([]byte, 1024)
	full_string := ""
	var full_buf []byte
	var residue_buf []byte
	for {
		n, _ := fin.Read(buf)
		if 0 == n {
			break
		}

		full_buf = append(residue_buf, buf...)

		full_string = string(full_buf)

		num := strings.LastIndex(full_string, ",")

		full_string = str.SubStr(full_string, 0, num)
		residue_buf = full_buf[num+1 : len(full_buf)]
		tempUrl := toUrl(strings.Split(full_string, ","))
		mySpider.AddUrls(tempUrl, "html")
	}
	mySpider.AddPipeline(pipeline.NewPipelineBuf(conn)). // Print result on screen
								SetThreadnum(30). // Crawl request by three Coroutines
								Run()
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
}
