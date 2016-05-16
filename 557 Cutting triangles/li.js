//first post: result: 2699929328 time: 2414.123s
//replace isNumber by tmp2%tmp == 0
//move a * a - b * c > 0 to the condition of loop
//now: result: 2699929328 time: 585.326s
function li(n) {
	start = new Date().getTime();
	var sum = 0;
	for (a = 1; a <= n - 3; ++a) {
		var bmax = n - a - 2;
		for (var b = 1; b <= bmax; ++b) {
			var cmax = n - a - b - 1;
			for (var c = b; c <= cmax && a * a - b * c > 0; ++c) {
				var tmp = a * a - b * c;
				var tmp2 = b * c * (2 * a + b + c);
				if (tmp2%tmp == 0) {
					var d = tmp2 / tmp;
					var area = a + b + c + d;
					if (area <= n)
						sum += a + b + c + d;
					
				}
			}
		}

	}

	var result = sum;
	end = new Date().getTime();
	console.log("result:", result, "time:", (end - start) / 1000 + "s")
}
