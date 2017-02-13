// struct
package main

import (
	"fmt"
)

type Books struct {
	title   string
	author  string
	subject string
	book_id int
}

func main() {
	var book1 Books
	var book2 Books

	book1.title = "go语言"
	book1.author = "hairichuhe"
	book1.subject = "golang course"
	book1.book_id = 1

	book2.title = "python course"
	book2.author = "hairichuhe"
	book2.subject = "python lang course"
	book2.book_id = 2

	fmt.Printf("book1 title : %s\n", book1.title)
	fmt.Printf("book1 author : %s\n", book1.author)
	fmt.Printf("book1 subject : %s\n", book1.subject)
	fmt.Printf("book1 book_id : %d\n", book1.book_id)

	fmt.Printf("book1 title : %s\n", book1.title)
	fmt.Printf("book1 author : %s\n", book1.author)
	fmt.Printf("book1 subject : %s\n", book1.subject)
	fmt.Printf("book1 book_id : %d\n", book1.book_id)
}
