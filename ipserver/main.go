package main // queryip project main.go

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strconv"
	"strings"

	"utils/httputil"
	str "utils/strings"

	"github.com/BurntSushi/toml"
	"github.com/PuerkitoBio/goquery"
	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

var config tomlConfig

type tomlConfig struct {
	DB database `toml:"database"`
}

type database struct {
	Server   string
	Username string
	Password string
	Dataname string
}

type sqlModel struct {
	ip       string
	city     string
	country  string
	location string
}

func init() {

	if _, err := toml.DecodeFile("./conf.toml", &config); err != nil {
		fmt.Println(err)
		return
	}
	db, _ = sql.Open("mysql", config.DB.Username+":"+config.DB.Password+"@tcp("+config.DB.Server+")/"+config.DB.Dataname+"?charset=utf8")
	//	db, _ = sql.Open("mysql", "hairichuhe:520wsy@tcp(db4free.net:3306)/hairichuhe?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
}

func main() {
	startHttpServer()
}

// w表示response对象，返回给客户端的内容都在对象里处理
// r表示客户端请求对象，包含了请求头，请求参数等等
func index(w http.ResponseWriter, r *http.Request) {

	// 往w里写入内容，就会在浏览器里输出
	sql := sqlModel{"", "", "", ""}
	r.ParseForm()
	if len(r.Form["ip"]) > 0 {
		if regip(r.Form["ip"][0]) {
			sql.ip = r.Form["ip"][0]
			locationstr := query(r.Form["ip"][0])
			if len(locationstr) == 0 {
				result := getIp(r.Form["ip"][0])
				if handleStr(result, "\"city\":\"") == "-1" {
					arr := strings.Split(getAbroad(r.Form["ip"][0]), "|")
					sql.city = arr[0]
					sql.country = arr[1]
					arr[2] = str.SubStr(arr[2], 0, strings.Index(arr[2], "°"))
					arr[3] = str.SubStr(arr[3], 0, strings.Index(arr[3], "°"))
					sql.location = arr[3] + "," + arr[2]
					insert(sql)
					fmt.Fprintf(w, sql.location)
				} else {
					sql.city = handleStr(result, "\"city\":\"")
					sql.country = "China"
					locationstr := getLoaction(sql.city)
					sql.location = handleStr(locationstr, "\"location\":\"")
					insert(sql)
					fmt.Fprintf(w, sql.location)
				}
			} else {
				fmt.Fprintf(w, locationstr)
			}
		} else {
			fmt.Fprintf(w, "您传入的公网ip不合法！")
		}
	} else {
		fmt.Fprintf(w, "请传入参数！")
	}
}

func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}

func startHttpServer() {
	// 设置路由，如果访问/，则调用index方法
	http.HandleFunc("/", index)
	fmt.Println("listen start at port 9090!")
	// 启动web服务，监听9090端口
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func getIp(ip string) string {
	url := "http://restapi.amap.com/v3/ip?key=57b4173ef81af17fa6e93aceb24ff751&ip=" + ip + "&output=JSON"
	return httputil.HttpGet(url)
}

func getLoaction(city string) string {
	url := "http://restapi.amap.com/v3/geocode/geo?key=57b4173ef81af17fa6e93aceb24ff751&address=" + city + "&output=JSON"
	return httputil.HttpGet(url)
}

func handleStr(all string, target string) string {
	if strings.Index(all, target) == -1 && strings.Index(all, "OK") != -1 {
		return "-1"
	} else if strings.Index(all, target) == -1 && strings.Index(all, "ok") == -1 {
		return "‘Morality in Media’ recording your IP address and ‘illegal access’ to their site!!"
	} else {
		start := strings.Index(all, target) + len(target)
		newStr := all[start:]
		end := strings.Index(newStr, "\"")
		return newStr[:end]
	}
}

func insert(sql sqlModel) {
	stmt, err := db.Prepare(`INSERT ip_location (ip,country,city,location) values (?,?,?,?)`)
	defer stmt.Close()
	checkErr(err)
	_, err1 := stmt.Exec(sql.ip, sql.country, sql.city, sql.location)
	checkErr(err1)
}

func query(ip string) string {
	var location string
	rows, err := db.Query("SELECT location FROM ip_location WHERE ip='" + ip + "'")
	defer rows.Close()
	checkErr(err)

	for rows.Next() {
		rows.Columns()
		err = rows.Scan(&location)
		checkErr(err)

		break
	}
	if location == "" {
		return ""
	} else {
		return location
	}
}

func getAbroad(ip string) string {
	doc, err := goquery.NewDocument("http://www.ip-adress.com/ip_tracer/" + ip)
	if err != nil {
		fmt.Println(err)
	}

	str := ""
	// Find the review items
	doc.Find("table.vtable").First().Find("tr").Each(func(i int, s *goquery.Selection) {
		// For each item found, get the band and title
		if s.Find("th").Text() == "City" {
			str += strings.TrimSpace(s.Find("td").Text()) + "|"
		} else if s.Find("th").Text() == "Country Code" {
			str += strings.Trim(s.Find("td").Text(), "\r\t\n") + "|"
		} else if s.Find("th").Text() == "Latitude" {
			str += strings.Trim(s.Find("td").Text(), "\r\t\n") + "|"
		} else if s.Find("th").Text() == "Longitude" {
			str += strings.Trim(s.Find("td").Text(), "\r\t\n")
		}
	})
	return str
}

func regip(ip string) bool {
	isnum, _ := regexp.MatchString(`[^0-9\.]`, ip)
	if isnum {
		return false
	} else {
		isIp, _ := regexp.MatchString(`((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)`, ip)
		if isIp {
			if ip[:2] == "10" {
				return false
			} else if ip[:7] == "192.168" {
				return false
			} else if ip[:3] == "172" {
				arr := strings.Split(ip, ".")
				num, _ := strconv.Atoi(arr[1])
				if num >= 16 && num <= 31 {
					return false
				} else {
					return true
				}
			} else {
				return true
			}
		} else {
			return false
		}
	}
}
