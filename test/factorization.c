#include <stdio.h>

int main(){
	int n=1000000007;  // 用户输入的整数
	int i;  // 循环标志

	printf("%d=",n);

	// n>=2才执行下面的循环
	for(i=2; i<=n; i++){
		while(n!=i){
			if(n%i==0){
				printf("%d*",i);
				n=n/i;
			}else
				break;
		}
	}
	printf("%d\n",n);

	return 0;
}