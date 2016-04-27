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

tri = function(a, b) {
	return ((a - 1) * (b - 1) - lcm(a, b) + 1) / 2
}

rec = function(a, b, c, d) {
	//return tri(a, b) + tri(b, c) + tri(c, d) + tri(d, a) + a + b + c + d - 3;
	return (a+c)*(b+d)+2-lcm(a,b)-lcm(b,c)-lcm(c,d)-lcm(d,a);
}

start = new Date().getTime();
m = 100;
total = 0;
for (a = 1; a <= m; a++) {
	for (b = 1; b <= m; b++) {
		for (c = 1; c <= m; c++) {
			for (d = 1; d <= m; d++) {
				total += Number.isInteger(Math.sqrt(rec(a, b, c, d)));
			}
		}
	}
}
result = total;
end = new Date().getTime();
console.log("result: " + result + " time: " + (end - start) / 1000 + "s");
