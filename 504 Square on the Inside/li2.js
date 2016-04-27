start = new Date().getTime();
lcm = function(m, n) {
	var u = +m,
		v = +n,
		t = v;
	while (v != 0) {
		t = u % v;
		u = v;
		v = t;
	}
	return u
}

rec = function(a, b, c, d) {
	return gcd[a][b] + gcd[b][c] + gcd[c][d] + gcd[d][a] + a + b + c + d - 3;
}

m = 100;
gcd = [];
for (var i = 1; i <= m; ++i) {
	gcd[i] = [];
	for (var j = 1; j <= i; ++j) {
		gcd[i][j] = ((i - 1) * (j - 1) - lcm(i, j) + 1) / 2;
		gcd[j][i] = gcd[i][j];
	}
}
this.gcd = gcd;
total = 0;
for (a = 1; a <= m; ++a) {
	for (b = 1; b <= m; ++b) {
		for (c = 1; c <= m; ++c) {
			for (d = 1; d <= m; ++d) {
				if(Number.isInteger(Math.sqrt(rec(a, b, c, d)))) {
					total += 1;
				}
			}
		}
	}
}
result = total;
end = new Date().getTime();
console.log("result: " + result + " time: " + (end - start) / 1000 + "s");
