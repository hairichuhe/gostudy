// chromeDrive project main.go
package main

import (
	"context"
	"io/ioutil"
	"log"
	"time"

	cdp "github.com/knq/chromedp"
	cdptypes "github.com/knq/chromedp/cdp"
	"github.com/knq/chromedp/runner"
)

func main() {
	var err error

	// create context
	ctxt, cancel := context.WithCancel(context.Background())
	defer cancel()

	// create chrome instance
	c, err := cdp.New(ctxt, cdp.WithLog(log.Printf), cdp.WithRunnerOptions(
		runner.Flag("start-maximized", true),
	))
	if err != nil {
		log.Fatal(err)
	}

	// run task list
	err = c.Run(ctxt, googleSearch())
	if err != nil {
		log.Fatal(err)
	}

	// shutdown chrome
	err = c.Shutdown(ctxt)
	if err != nil {
		log.Fatal(err)
	}

	// wait for chrome to finish
	err = c.Wait()
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("saved screenshot of #testimonials from search result listing")
}

func googleSearch() cdp.Tasks {
	var buf []byte
	return cdp.Tasks{
		cdp.Navigate(`http://www.wangxiaojun.top`),
		cdp.WaitVisible(`#mainbody`, cdp.ByID),
		cdp.Sleep(5 * time.Second),
		cdp.Screenshot("#mainbody", &buf),
		cdp.ActionFunc(func(context.Context, cdptypes.Handler) error {
			return ioutil.WriteFile("testimonials.png", buf, 0644)
		}),
	}
}
