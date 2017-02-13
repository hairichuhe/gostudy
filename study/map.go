// map
package main

import (
	"fmt"
)

func main() {
	var countryCapitalMap map[string]string

	countryCapitalMap = make(map[string]string)

	countryCapitalMap["france"] = "paris"
	countryCapitalMap["italy"] = "rome"
	countryCapitalMap["japan"] = "tokyo"
	countryCapitalMap["india"] = "new delhi"

	for country := range countryCapitalMap {
		fmt.Println("capital of", country, "is", countryCapitalMap[country])
	}

	captial, ok := countryCapitalMap["united states"]
	if ok {
		fmt.Println("capital of united states is", captial)
	} else {
		fmt.Println(("capital of united states is not present"))
	}
}
