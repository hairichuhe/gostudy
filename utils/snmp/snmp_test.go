// snmp_test
package snmp

import (
	"fmt"
	"testing"
)

func Test_aes(t *testing.T) {
	if Issnmp("192.168.0.223") {
		result := Mib()
		fmt.Println(result.Gateway)
		fmt.Println(result.NetMask)
		fmt.Println(result.SysDescr)
	} else {
		fmt.Println("没连通！")
	}
}
