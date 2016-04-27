start = new Date().getTime();
for(i=0,tmp=28433;i<7830457;++i) tmp = tmp * 2 % 10000000000; tmp++;
result = tmp;
end = new Date().getTime();
console.log("result:", result, "time:", (end - start)/1000 + "s")
//result: 8739992577 time: 0.129s