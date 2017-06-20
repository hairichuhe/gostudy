// validatetoken
package caddyutil

import (
	"encoding/base64"
	"net/http"
	"strconv"
	"strings"
	"time"
	"utils/aes"
)

func Nopass(w http.ResponseWriter, r *http.Request) bool {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	aesEnc := aes.AesEncrypt{}
	tokenori, err0 := base64.StdEncoding.DecodeString(r.Header.Get("Authorization"))
	tokenstr, err1 := aesEnc.Decrypt(tokenori)
	if err1 != nil || err0 != nil {
		//设置 http请求状态
		w.WriteHeader(403)
		//写入页面数据
		w.Write([]byte("{\"code\":403,\"success\":false,\"message\":\"权限受限，请重新登录！\"}"))
		return true
	}
	if over(tokenstr) {
		//设置 http请求状态
		w.WriteHeader(403)
		//写入页面数据
		w.Write([]byte("{\"code\":403,\"success\":false,\"message\":\"授权过期，请重新登录！\"}"))
		return true
	}
	origIp := r.RemoteAddr
	if noip(origIp, tokenstr) {
		//设置 http请求状态
		w.WriteHeader(403)
		//写入页面数据
		w.Write([]byte("{\"code\":403,\"success\":false,\"message\":\"授权失败，请重新登录！\"}"))
		return true
	}
	return false
}

func handleStr(all string, target string, endstr string) string {
	if strings.Index(all, target) == -1 {
		return "-1"
	} else {
		start := strings.Index(all, target) + len(target)
		newStr := all[start:]
		end := strings.Index(newStr, endstr)
		return newStr[:end]
	}
}

func noip(ip, tokenstr string) bool {
	var t = handleStr(tokenstr, "ip:", ",")
	if t == "-1" {
		return true
	}
	if strings.Index(ip, ":") != -1 {
		ip = ip[:strings.Index(ip, ":")]
	}
	if ip != t {
		return true
	}
	return false
}

func over(tokenstr string) bool {
	var t = handleStr(tokenstr, "over:", "}")
	if t == "-1" {
		return true
	}
	tt, err := strconv.ParseInt(t, 10, 64)
	if err != nil {
		return true
	}
	now := time.Now().Unix()
	if now > tt {
		return true
	}
	return false
}
