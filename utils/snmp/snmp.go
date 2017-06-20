package snmp

import (
	"fmt"
	"log"
	"net"

	"github.com/alouca/gosnmp"
)

type Info struct {
	Gateway  string
	NetMask  string
	SysDescr string
}

func Issnmp(ipn string) bool {
	sr, err := gosnmp.NewGoSNMP(ipn, "public", gosnmp.Version2c, 5)
	if err != nil {
		return false
	}
	//系统信息
	_, err = sr.Get(".1.3.6.1.2.1.1.1.0")
	if err == nil {
		return true
	} else {
		return false
	}
}

func Mib(ip string) Info {
	var info Info
	s, err := gosnmp.NewGoSNMP(ip, "public", gosnmp.Version2c, 5)
	//获取网关地址
	gateway, err := s.Get(".1.3.6.1.2.1.4.21.1.7.0.0.0.0")
	if err == nil {
		for _, v := range gateway.Variables {
			switch v.Type {
			case gosnmp.IpAddress:
				info.Gateway = v.Value.(net.IP).String()
			}
		}
	} else {
		log.Println(err)
	}

	//获取子网掩码
	netmask, err := s.Get(".1.3.6.1.2.1.4.20.1.3." + ip)
	if err == nil {
		fmt.Println(ip)
		fmt.Println(netmask.Variables)
		for _, v := range netmask.Variables {
			switch v.Type {
			case gosnmp.IpAddress:
				info.NetMask = v.Value.(net.IP).String()
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
				info.SysDescr = v.Value.(string)
			}
		}
	} else {
		log.Println(err)
	}
	return info
}
