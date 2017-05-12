// test_query project main.go
package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func init() {
	db, _ = sql.Open("mysql", "root:root@tcp(192.168.0.117:3306)/demo_la?charset=utf8")
	db.SetMaxOpenConns(200)
	db.SetMaxIdleConns(100)
	db.Ping()
}
func checkError(err error) {
	if err != nil {
		fmt.Println(err)
	}

}
func myToken(w http.ResponseWriter, r *http.Request) {
	out, _ := json.Marshal(query("username is NOT NULL"))
	io.WriteString(w, string(out))
	fmt.Println(1)
}

func query(str string) []map[string]string {
	rows, err := db.Query("SELECT * FROM tb_user WHERE " + str)
	defer rows.Close()
	checkError(err)
	columns, err := rows.Columns()

	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}
	values := make([]sql.RawBytes, len(columns))

	scanArgs := make([]interface{}, len(values))
	result := make([]map[string]string, 0)
	for i := range values {
		scanArgs[i] = &values[i]
	}
	for rows.Next() {
		err = rows.Scan(scanArgs...)
		if err != nil {
			panic(err.Error())
		}
		row := make(map[string]string)
		var value string
		for i, col := range values {
			if col == nil {
				value = "NULL"
			} else {
				value = string(col)
			}
			row[columns[i]] = value
		}
		result = append(result, row)
	}
	if err = rows.Err(); err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}
	return result
}
func main() {
	http.HandleFunc("/api/user", myToken)
	log.Fatal(http.ListenAndServe(":8062", nil))
}
