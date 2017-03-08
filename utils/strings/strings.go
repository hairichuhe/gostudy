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
