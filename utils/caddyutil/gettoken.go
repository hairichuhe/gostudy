// gettoken
package caddyutil

import (
	"database/sql"
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
	"utils/aes"
	"utils/redipool"

	"github.com/garyburd/redigo/redis"

	"github.com/BurntSushi/toml"
	_ "github.com/go-sql-driver/mysql"
)

var (
	db     *sql.DB
	config tomlConfig
	rd     *redis.Pool
)

type tomlConfig struct {
	DB database `toml:"database"`
}

type database struct {
	Server   string
	Username string
	Password string
	Dataname string
	Rdserver string
	RdPW     string
}

func init() {

	if _, err := toml.DecodeFile("./conf.toml", &config); err != nil {
		fmt.Println(err)
		return
	}
	//	go restconf()
	db, _ = sql.Open("mysql", config.DB.Username+":"+config.DB.Password+"@tcp("+config.DB.Server+")/"+config.DB.Dataname+"?charset=utf8")
	//	db, _ = sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/api?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
	rd = redipool.NewPool(config.DB.Rdserver, config.DB.RdPW)
}

func GetToken(w http.ResponseWriter, r *http.Request) bool {
	if r.URL.Path == "/oauth/token" {
		userName := r.FormValue("username")
		passWord := r.FormValue("password")

		if userName != "" && passWord != "" {
			dId, dpassword := query(userName)
			drtoken := queryrd("token_" + dId)
			if drtoken == "" {
				cop := aes.Compare(dpassword, passWord)
				if cop == nil {
					ip := r.RemoteAddr
					if strings.Index(ip, ":") != -1 {
						ip = ip[:strings.Index(ip, ":")]
					}
					aesEnc := aes.AesEncrypt{}
					str := "{id:" + dId + ",ip:" + ip + ",over:" + strconv.FormatInt(time.Now().Unix()+7200, 10) + "}"
					tokenbyte, _ := aesEnc.Encrypt(str)
					toke := base64.StdEncoding.EncodeToString(tokenbyte)
					w.Write([]byte("{\"access_token\":\"" + toke + "\",\"expires_in\":7200}"))
					savekey("token_"+dId, toke, 7200)
				} else {
					//设置 http请求状态
					w.WriteHeader(400)
					//写入页面数据
					w.Write([]byte("{\"code\":400,\"success\":false,\"message\":\"密码错误，请重新登录！\"}"))
				}
			} else {
				ti := queryTTL("token_" + dId)
				w.Write([]byte("{\"access_token\":\"" + drtoken + "\",\"expires_in\":" + strconv.FormatInt(ti, 10) + "}"))
			}
		} else {
			//设置 http请求状态
			w.WriteHeader(400)
			//写入页面数据
			w.Write([]byte("{\"code\":400,\"success\":false,\"message\":\"用户名或密码不能为空，请重新登录！\"}"))
		}
		return true
	}
	return false
}
func query(username string) (string, string) {
	var id string
	var password string
	rows, err := db.Query("SELECT ID,PASSWORD FROM tb_user WHERE username='" + username + "'")
	defer rows.Close()
	checkErr(err)

	for rows.Next() {
		rows.Columns()
		err = rows.Scan(&id, &password)
		checkErr(err)

		break
	}
	return id, password
}

func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}

func restconf() {
	data, err := ioutil.ReadFile("./conf.toml")
	if err != nil {
		log.Fatalln(err)
	}
	str := string(data)
	str = strings.Replace(str, config.DB.Username, "", -1)
	str = strings.Replace(str, config.DB.Password, "", -1)
	str = strings.Replace(str, config.DB.Dataname, "", -1)
	str = strings.Replace(str, config.DB.RdPW, "", -1)
	err = ioutil.WriteFile("./conf.toml", []byte(str), 0666)
	if err != nil {
		log.Fatalln(err)
	}
}

func queryrd(t string) string {
	conn := rd.Get()
	defer conn.Close() //redis操作
	v, err := redis.String(conn.Do("GET", t))
	if err != nil {
		return ""
	}
	return v
}

func queryTTL(t string) int64 {
	conn := rd.Get()
	defer conn.Close() //redis操作
	v, err := redis.Int64(conn.Do("TTL", t))
	if err != nil {
		fmt.Println(err)
		return -1
	}
	return v
}

func savekey(a, b string, c int) {
	conn := rd.Get()
	defer conn.Close() //redis操作
	conn.Do("SETEX", a, c, b)
}
