// httputil project httputil.go
package httputil

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func HttpGet(url string) string {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}

	return string(body)
}
