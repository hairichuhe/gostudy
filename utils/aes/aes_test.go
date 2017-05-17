package aes

import (
	"encoding/base64"
	"fmt"
	"testing"
)

func Test_aes(t *testing.T) {
	aesEnc := AesEncrypt{}
	arrEncrypt, err := aesEnc.Encrypt("{id:6693,ip:192.168.255.255,over:1564534651356561}")
	if err != nil {
		fmt.Println(arrEncrypt)
		return
	}
	str := base64.StdEncoding.EncodeToString(arrEncrypt)
	if str == "!@#EDCvfr4" {
		t.Errorf("%d加密失败！", str)
	}
	fmt.Println(str)
	arr, _ := base64.StdEncoding.DecodeString(str)
	strMsg, err := aesEnc.Decrypt(arr)
	if err != nil {
		fmt.Println(arrEncrypt)
		return
	}
	fmt.Println(strMsg)
	cop := Compare("$2a$10$KLXz/KJOHLLRgkCUUkByRugVCrxj.jjk0p0uLW62HCSMGAU7muJGa", "!@#EDCvfr4")
	if cop == nil {
		fmt.Println("验证通过！")
	}
}
