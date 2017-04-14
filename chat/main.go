package main

import (
	"crypto/sha1"
	"encoding/xml"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"sort"
	"strings"
	"time"
	"utils/httputil"

	"github.com/PuerkitoBio/goquery"
	"github.com/bitly/go-simplejson"
	"github.com/davecgh/go-spew/spew"
)

const (
	AppId     = "wxc3b7890c78873a70"
	Appsecret = "d70472a21a18928616869965116963c8"
	TOKEN     = "111111"
	APIKEY    = "9aa081ff30e207f96c46dfdd21a7b65f"
	//TUURL  = "http://127.0.0.1:8989/postpage"
	TUURL = "http://www.tuling123.com/openapi/api"
	//-------menukey自定义菜单按键值
	MENUKEY_1 = "123"
	MENUKEY_2 = ""
	MENUKEY_3 = ""
)

type Message struct {
	XMLName      xml.Name `xml:"xml"`
	ToUserName   string   `xml:",omitempty"`
	FromUserName string   `xml:",omitempty"`
	CreateTime   int64    `xml:",omitempty"`
	MsgType      string   `xml:",omitempty"`
	Content      string   `xml:",omitempty"`
	//-----------------accpet---------------
	Event        string  `xml:",omitempty"`
	EventKey     string  `xml:",omitempty"`
	PicUrl       string  `xml:",omitempty"`
	MediaId      string  `xml:",omitempty"`
	MsgId        string  `xml:",omitempty"`
	Format       string  `xml:",omitempty"` //语音格式
	Recognition  string  `xml:",omitempty"` //语音识别结果
	ThumbMediaId string  `xml:",omitempty"` //ThumbMediaId 视频媒体id
	Location_X   float64 `xml:",omitempty"` //Location_X地理位置维度
	Location_Y   float64 `xml:",omitempty"` //Location_Y
	Scale        string  `xml:",omitempty"` //地图缩放大小
	Label        string  `xml:",omitempty"` //地理位置信息
	Title        string  `xml:",omitempty"` //消息标题
	Description  string  `xml:",omitempty"` //消息Description
	Url          string  `xml:",omitempty"` //消息url
	//-----------------response--------------

}

var url, keyword string
var token Token

type Movie struct {
	Title      string
	Href       string
	Content    string
	Magnetlink string
}

type Token struct {
	to string
	ex int64
}

func checkError(err error) {
	if err != nil {
		fmt.Println(err)
		spew.Dump(err)
		os.Exit(1)
	}

}
func getMovie(keyword string, page int) (movies map[int]*Movie) {
	//http://stackoverflow.com/questions/32751537/why-do-i-get-a-cannot-assign-error-when-setting-value-to-a-struct-as-a-value-i
	movies = make(map[int]*Movie)
	url = "http://www.btyunsou.com"
	searchUrl := url + "/search/" + keyword + "_ctime_" + fmt.Sprintf("%d", page) + ".html"
	//fmt.Println(searchUrl + url)
	res, err := http.Get(searchUrl)
	/*checkError(err)
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	fmt.Println(string(body))*/
	doc, err := goquery.NewDocumentFromResponse(res)
	checkError(err)
	doc.Find(".media").Each(func(i int, s *goquery.Selection) {
		href, ok := s.Find(".title").Attr("href")
		if !ok {
			href = "/"
		}

		subdoc, err := goquery.NewDocument(url + href)
		//spew.Dump(subdoc)
		checkError(err)
		movies[i] = &Movie{
			Title:      strings.TrimSpace(strings.Trim(s.Find(".title").Text(), "\r\n")),
			Href:       url + href,
			Magnetlink: subdoc.Find(".magnet-link").Text(),
			Content:    strings.TrimSpace(strings.Trim(subdoc.Find(".icon-film").Parent().Text()+subdoc.Find(".icon-film").Parent().Next().Text(), "\r\n")),
		}
	})
	return
}

/**
 * [validtion 验证函数]
 * @param  {[type]} w http.ResponseWriter [description]
 * @param  {[type]} r *http.Request)      (e            bool, s string [description]
 * @return {[type]}   [description]
 */
func validtion(w http.ResponseWriter, r *http.Request) (e bool, s string) {
	sign := r.FormValue("signature")
	timestamp := r.FormValue("timestamp")
	nonce := r.FormValue("nonce")
	echostr := r.FormValue("echostr")
	result := []string{TOKEN, timestamp, nonce}
	sort.Sort(sort.StringSlice(result))

	//拼接字符串
	endstr := ""
	for _, v := range result {
		endstr = endstr + v
	}
	//sha1 hash
	h := sha1.New()
	h.Write([]byte(endstr))
	verify := h.Sum(nil)
	ok := fmt.Sprintf("%x", verify)
	//以字符串形式保存verify，注意其中不掺杂其他换行符之类否则字符串判定时为false
	/*println(ok)
	println(sign)
	print(echostr)*/
	if strings.EqualFold(ok, sign) {
		return true, echostr
	} else {
		return false, ""
	}

}

func (message Message) reText() (response Message) {
	str := ""
	//	movies := getMovie(message.Content, 1)
	//	for k, v := range movies {
	//		str += "title:" + v.Title + "\r\n" + "number:" + fmt.Sprintf("%d", k) + "\r\n" + "链接：" + v.Magnetlink + "\r\n"
	//	}
	//图灵机器人介入
	info := `{"key":"` + APIKEY + `","info":"` + message.Content + `","userid":"` + message.FromUserName + `"}`
	reader := strings.NewReader(info)
	//字符串读取到内存中
	res, _ := http.Post(TUURL, "application/json", reader)
	defer res.Body.Close()
	result, _ := ioutil.ReadAll(res.Body)
	//log.Println(string(result))
	js, _ := simplejson.NewJson(result)

	switch code, _ := js.Get("code").Int(); code {
	//处理文本消息
	case 100000:
		text, _ := js.Get("text").String()
		fmt.Println(text)
		str += text
		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      str} //text
		return response
	//处理链接消息
	case 200000:
		text, _ := js.Get("text").String()
		url, _ := js.Get("url").String()
		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      text + url}
		return response
	//菜谱及新闻 含有列表
	case 302000, 308000:
		text, _ := js.Get("text").String()
		//list, _ := js.Get("list").Map()

		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      text}
		return response
	default:
		println(code)
	}
	return
}

func (message Message) reEvent() (response Message) {
	switch message.Event {
	case "subscribe":
		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      "欢迎订阅哦"}
	case "unsubscribe":
		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      "亲爱的你回来吧，有什么建议可以告诉我哦，只是你不要走"}
	default:
		if message.EventKey == MENUKEY_1 {

		}

	}
	return response
}
func messageHandler(message Message) (response Message) {
	switch message.MsgType {
	case "text":
		response = message.reText()
		return response
	case "event":
		response = message.reEvent()
		return response
	default:
		response = Message{ToUserName: message.FromUserName,
			FromUserName: message.ToUserName,
			CreateTime:   time.Now().Unix(),
			MsgType:      "text",
			Content:      "not ok"}
		return response
	}

}
func mainHandler(w http.ResponseWriter, r *http.Request) {
	if len(r.FormValue("echostr")) != 0 {
		//验证函数
		ok, s := validtion(w, r)
		println(s)
		println(ok)
		if ok {
			io.WriteString(w, s)
		}
		return
	}
	var message Message
	//执行回复操作
	result, _ := ioutil.ReadAll(r.Body)
	//	log.Println(string(result))
	if err := xml.Unmarshal(result, &message); err != nil {
		panic(err)
	}
	re := messageHandler(message)
	out, err := xml.MarshalIndent(re, "", "")
	if err != nil {
		log.Printf("error: %v\n", err)
	}
	log.Println(string(out))
	io.WriteString(w, string(out))

}

func getToken() {
	url := "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + AppId + "&secret=" + Appsecret
	str := httputil.HttpGet(url)
	js, _ := simplejson.NewJson([]byte(str))
	tokenstr, _ := js.Get("access_token").String()
	if tokenstr != "" {
		token.to = tokenstr
		token.ex = time.Now().Unix()
		fmt.Println(111)
	} else {
		fmt.Println("获取token发生错误！")
	}
}

func setMenu() {
	if token.to == "" || time.Now().Unix()-token.ex > 7190 {
		getToken()
		postmenu()
	} else {
		postmenu()
	}
}

func postmenu() {
	url := "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + token.to
	data := `
		{
	    "button":[
			{
		        "name":"菜单1",
		        "sub_button":[
	            {	
	               "type":"view",
	               "name":"菜单1-1",
	               "url":"http://tevei.tunnel.qydev.com/html/1-1.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单1-2",
	               "url":"http://tevei.tunnel.qydev.com/html/1-2.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单1-3",
	               "url":"http://tevei.tunnel.qydev.com/html/1-3.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单1-4",
	               "url":"http://tevei.tunnel.qydev.com/html/1-4.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单1-5",
	               "url":"http://tevei.tunnel.qydev.com/html/1-5.html"
	            }]
		    },
		    {	
		        "type":"click",
		        "name":"@我~",
		        "key":"V1001_TODAY_CALLME"
		    },
		    {
		        "name":"菜单2",
		        "sub_button":[
	            {	
	               "type":"view",
	               "name":"菜单2-1",
	               "url":"http://tevei.tunnel.qydev.com/html/2-1.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单2-2",
	               "url":"http://tevei.tunnel.qydev.com/html/2-2.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单2-3",
	               "url":"http://tevei.tunnel.qydev.com/html/2-3.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单2-4",
	               "url":"http://tevei.tunnel.qydev.com/html/2-4.html"
	            },
	            {
	               "type":"view",
	               "name":"菜单2-5",
	               "url":"http://tevei.tunnel.qydev.com/html/2-5.html"
	            }]
		    }]
		 }
		`
	req, err := http.Post(url, "application/x-www-form-urlencoded", strings.NewReader(data)) //这里定义链接和post的数据
	fmt.Println(req)
	if err != nil {
		log.Println(err.Error())
		return
	}
	defer req.Body.Close()
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		log.Println(err.Error())
		return
	}
	js, _ := simplejson.NewJson(body)
	errcode, _ := js.Get("errcode").Int()
	log.Println(string(body))
	if errcode == 0 {
		log.Println("菜单设置成功")
	} else {
		log.Println("菜单设置失败：" + string(body))
	}
}

func main() {

	http.HandleFunc("/", mainHandler)
	http.Handle("/html/", http.StripPrefix("/html/", http.FileServer(http.Dir("./html/"))))
	setMenu()
	log.Fatal(http.ListenAndServe(":80", nil))
}
