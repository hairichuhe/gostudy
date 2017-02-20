// sendmaila project main.go
package main

import (
	"encoding/base64"
	"fmt"
	"net/mail"
	"net/smtp"

	"github.com/opesun/goquery"
)

func SendToEvernote(user, password, host, to, subject, body string) error {
	/*
	 *发送邮件到Evernote
	 */

	b64 := base64.NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabckefghijklmnopqrstuvwxyz0123456789+/")
	from := mail.Address{user, user}
	toMail := mail.Address{to, to}
	header := make(map[string]string)
	header["From"] = from.String()
	header["To"] = toMail.String()
	header["Subject"] = fmt.Sprintf("=?UTF-8?B?%s?=", b64.EncodeToString([]byte(subject)))
	header["MIME-Version"] = "1.0"
	header["Content-Type"] = "text/html; charset=UTF-8"
	header["Content-Transfer-Encoding"] = "base64"

	message := ""
	for k, v := range header {
		message += fmt.Sprintf("%s:%s\r\n", k, v)
	}
	message += "\r\n" + b64.EncodeToString([]byte(body))
	auth := smtp.PlainAuth("", user, password, host)
	err := smtp.SendMail(
		host+":25",
		auth,
		user,
		[]string{toMail.Address},
		[]byte(message),
	)

	if err != nil {
		panic(err)
	}
	return err
}

func main() {
	var url = "http://www.wangxiaojun.top/webpack/webpack.html"
	p, error := goquery.ParseUrl(url)
	if error != nil {
		panic(error)
	}
	subject := p.Find("title").Text()
	body := p.Html()
	host := "smtp.qq.com"
	email := "14320794@qq.com"
	password := "giwjhmcrltfqbhhc"
	toEmail := "1756738038@qq.com"

	fmt.Println("发送邮件")
	err := SendToEvernote(email, password, host, toEmail, subject, body)
	if err != nil {
		fmt.Println("发送邮件出现错误！")
		fmt.Println(err)
	} else {
		fmt.Println("发送邮件成功！")
	}
}
