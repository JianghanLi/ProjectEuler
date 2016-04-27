start = new Date().getTime();
sum = 0;
for (i = 1; i < 1000; ++i) {
	if (i % 3 == 0 || i % 5 == 0)
		sum += i;
}
result = sum;
end = new Date().getTime();
console.log("result:", result, "time:", (end - start)/1000 + "s")