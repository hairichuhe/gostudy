// strings project strings.go
package strings

func SubStr(s string, start, end int) string {
	rs := []byte(s)
	rl := len(rs)

	if start < 0 {
		start = 0
	}

	if start > end {
		start, end = end, start
	}

	if end > rl {
		end = rl
	}

	if start > rl {
		start = rl
	}

	if end < 0 {
		end = 0
	}

	if end > rl {
		end = rl
	}

	return string(rs[start:end])
}

func NTos(n string) string {
	result := ""
	for i := 0; i < len(n); i++ {
		result += nTs(string(n[i]))
	}
	return result
}

func nTs(n string) string {
	switch n {
	case "0":
		return "f"
	case "1":
		return "b"
	case "2":
		return "h"
	case "3":
		return "w"
	case "4":
		return "k"
	case "5":
		return "n"
	case "6":
		return "a"
	case "7":
		return "p"
	case "8":
		return "u"
	case "9":
		return "s"
	default:
		return ""
	}
}
