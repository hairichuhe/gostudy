// snmp_test
package snmp

import (
	"fmt"
	"testing"
)

func Test_aes(t *testing.T) {
	if Issnmp("192.168.0.42") {
		result := Mib()
		fmt.Println(result.gateway)
		fmt.Println(result.netMask)
		fmt.Println(result.sysDescr)
	} else {
		fmt.Println("没连通！")
	}
}
