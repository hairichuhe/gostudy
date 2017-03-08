// Echo1 prints its command-line arguments.
package main

import (
	"fmt"
	"os"
	"strings"
	"utils/path"

	"github.com/PuerkitoBio/goquery"
	"github.com/hu17889/go_spider/core/common/page"
	"github.com/hu17889/go_spider/core/pipeline"
	"github.com/hu17889/go_spider/core/spider"

	str "utils/strings"
)

//组装url
func toUrl(a []string) []string {
	tempUrl := make([]string, 256)
	for _, word := range a {
		tempUrl = append(tempUrl, "http://cn.bing.com/search?q="+word+"&go=搜索&qs=bs&form=QBRE")
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
	urls := "\n\n"
	query.Find("ol#b_results h2 a").Each(func(i int, s *goquery.Selection) {
		href, _ := s.Attr("href")
		urls += href + "\n"
	})

	//	name := query.Find("title").Text()
	//	name = strings.Trim(name, " \t\n")
	//	if name == "" {
	//		p.SetSkip(true)
	//	}
	//	// the entity we want to save by Pipeline
	p.AddField("urls", strings.Trim(urls, "\t\n"))
}

func (this *MyPageProcesser) Finish() {
	fmt.Printf("TODO:before end spider \r\n")
}

func main() {
	mySpider := spider.NewSpider(NewMyPageProcesser(), "敏感词对应网址扒取")

	nowPath, _ := path.GetCurrentPath()
	userFile := nowPath + "test.txt"
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
	mySpider.AddPipeline(pipeline.NewPipelineFile(nowPath + "out_file.txt")). // Print result on screen
											SetThreadnum(30). // Crawl request by three Coroutines
											Run()
}
