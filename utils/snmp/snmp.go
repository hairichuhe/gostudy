package snmp

import (
	"fmt"
	"log"
	"net"

	"github.com/alouca/gosnmp"
)

var s *gosnmp.GoSNMP
var ip string

type Info struct {
	gateway  string
	netMask  string
	sysDescr string
}

func Issnmp(ipn string) bool {
	ip = ipn
	sr, err := gosnmp.NewGoSNMP(ipn, "public", gosnmp.Version2c, 5)
	if err != nil {
		fmt.Println(err)
		return false
	}
	//系统信息
	_, err = sr.Get(".1.3.6.1.2.1.1.1.0")
	if err == nil {
		s = sr
		return true
	} else {
		fmt.Println(err)
		return false
	}
}

func Mib() Info {
	var info Info

	//获取网关地址
	gateway, err := s.Get(".1.3.6.1.2.1.4.21.1.7.0.0.0.0")
	if err == nil {
		for _, v := range gateway.Variables {
			switch v.Type {
			case gosnmp.IpAddress:
				info.gateway = v.Value.(net.IP).String()
			}
		}
	} else {
		log.Println(err)
	}

	//获取子网掩码
	netmask, err := s.Get(".1.3.6.1.2.1.4.20.1.3." + ip)
	if err == nil {
		for _, v := range netmask.Variables {
			switch v.Type {
			case gosnmp.IpAddress:
				info.netMask = v.Value.(net.IP).String()
			}
		}
	} else {
		log.Println(err)
	}

	//系统信息
	sysdescr, err := s.Get(".1.3.6.1.2.1.1.1.0")
	if err == nil {
		for _, v := range sysdescr.Variables {
			switch v.Type {
			case gosnmp.OctetString:
				info.sysDescr = v.Value.(string)
			}
		}
	} else {
		log.Println(err)
	}
	return info
}
