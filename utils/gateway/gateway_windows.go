package gateway

import (
	"fmt"
	"net"
	"os/exec"
)

func DiscoverGateway() (ip net.IP, err error) {
	changeCmd := exec.Command("chcp", "437")
	_, err1 := changeCmd.CombinedOutput()
	if err != nil {
		fmt.Println(err1)
	}
	routeCmd := exec.Command("route", "print", "0.0.0.0")
	output, err := routeCmd.CombinedOutput()
	if err != nil {
		return nil, err
	}

	return parseWindowsRoutePrint(output)
}
