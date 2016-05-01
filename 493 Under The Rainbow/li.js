function C(n, m) {
	if (m > n || m < 0) return 0;
	if (m > n / 2) m = n - m;
	var tmp = 1;
	for (var i = 0; i < m; i++) {
		tmp = tmp * (n - i) / (i + 1);
	}
	return tmp;
}

// works
(1 - C(60, 20) / C(70, 20)) * 7;