#include <stdio.h>
#include <math.h>
#include <time.h>

int main() {
	clock_t start = clock();
    long n;
    long p, b=1;
    p = 7830457;
    for( n=28433 ; b<= 7830457; b++ ){
        n = n * 2 % 10000000000;
    }
    n++;
	clock_t finish = clock();
    double duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("%ld\n", n);
    printf( "%f seconds\n", duration );
	
}