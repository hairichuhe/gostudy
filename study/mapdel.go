// mapdel
package main

import (
	"fmt"
)

func main() {
	countryCapitalMap := map[string]string{"France": "Paris", "Italy": "Rome", "Japan": "Tokyo", "India": "New Delhi"}
	fmt.Println("原始 map")

	for country := range countryCapitalMap {
		fmt.Println("capital of", country, "is", countryCapitalMap[country])
	}

	delete(countryCapitalMap, "France")
	fmt.Println("entry for France deleted")

	fmt.Println("删除元素后map")

	for country := range countryCapitalMap {
		fmt.Println("capital of", country, "is", countryCapitalMap[country])
	}
}
