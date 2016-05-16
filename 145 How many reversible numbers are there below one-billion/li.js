//Answer: 608720
//Completed on Tue, 3 May 2016, 14:47


function test(x) {
	if (x%10 == 0) return false;	
	if ((Number(x.toString()[0]) + x%10) % 2 == 0) return false;
	var x2 = Number(x.toString().split("").reverse().join(""));
	var sum = x+x2;
	var numbers = sum.toString().split("");
	for(var i=0; i<numbers.length; ++i) {
		if (numbers[i]%2==0) return false;
	}
	//console.log(x,sum);
	return true;
}

function howMany(nb) {
	start = new Date().getTime();
	var result = 0;	
	for(var i=1; i<nb; ++i) {
		if(test(i)) result++;
	}
	end = new Date().getTime();
	console.log("result: " + result + " time: " + (end - start)/1000 + "s");
	return result;
}
howMany(1000000000);
//result: 608720 time: 666.503s



