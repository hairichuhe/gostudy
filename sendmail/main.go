// sendmail project main.go
package main

import (
	"fmt"
	"net/smtp"
	"strings"
)

func SendToMail(user, password, host, to, subject, body, mailtype string) error {
	hp := strings.Split(host, ":")
	auth := smtp.PlainAuth("", user, password, hp[0])
	var content_type string
	if mailtype == "html" {
		content_type = "Content-Type: text/" + mailtype + "; charset=UTF-8"
	} else {
		content_type = "Content-Type: text/plain" + "; charset=UTF-8"
	}

	msg := []byte("To: " + to + "\r\nFrom: " + user + "<" + user +
		">\r\nSubject: " + subject + "\r\n" + content_type + "\r\n\r\n" + body)
	send_to := strings.Split(to, ";")
	err := smtp.SendMail(host, auth, user, send_to, msg)
	return err
}

func main() {
	user := "14320794@qq.com"
	password := "giwjhmcrltfqbhhc"
	host := "smtp.qq.com:25"
	to := "2033258504@qq.com"

	subject := "给晶丫头发邮件"

	body := `
		<html>
		<body>
		<h3>
		"王晶是个大坏蛋，大呀大坏蛋~"
		</h3>
		</body>
		</html>
	`
	fmt.Println("发送邮件")
	err := SendToMail(user, password, host, to, subject, body, "html")
	if err != nil {
		fmt.Println("发送邮件出现错误！")
		fmt.Println(err)
	} else {
		fmt.Println("发送邮件成功！")
	}
}
