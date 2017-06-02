// Copyright 2012 Andreas Louca. All rights reserved.
// Use of this source code is goverend by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"fmt"

	"github.com/alouca/gosnmp"
)

func main() {

	s, err := gosnmp.NewGoSNMP("192.168.0.53", "public", gosnmp.Version2c, 5)
	if err != nil {
		fmt.Print(111)
	}
	resp, err := s.Get(".1.3.6.1.2.1.4.21.1.7.0.0.0.0")
	if err == nil {
		for _, v := range resp.Variables {
			switch v.Type {
			case gosnmp.OctetString:
				//				fmt.Print("Response: %s : %s : %s \n", v.Name, v.Value.(string), v.Type.String())
			}
		}
		fmt.Println(resp.Variables[0].Name)
		fmt.Println(resp.Variables[0].Value)
		fmt.Println(resp.Variables[0].Type)
	} else {
		fmt.Println(err)
	}
}
