package main // queryip project main.go

import (
	"encoding/base64"
	"fmt"
	"utils/aes"
)

func main() {
	aesEnc := aes.AesEncrypt{}
	arrEncrypt, err := aesEnc.Encrypt("!@#EDCvfr4")
	if err != nil {
		fmt.Println(arrEncrypt)
		return
	}
	str := base64.StdEncoding.EncodeToString(arrEncrypt)
	fmt.Println(str)
	arr, _ := base64.StdEncoding.DecodeString(str)
	strMsg, err := aesEnc.Decrypt(arr)
	if err != nil {
		fmt.Println(arrEncrypt)
		return
	}
	fmt.Println(strMsg)
}
