#include <stdio.h>
#include <math.h>
#include <time.h>

int main() {
	clock_t start = clock();
    double n;
    long p, b;
    p = 7830457;
    for( b=1 ; b<p ; b <<= 1 );
    for( n=1 ; b>0 ; b >>= 1 ){
        if( p&b ) n = fmod( n*n * 2, 10000000000.0 );
        else n = fmod( n*n, 10000000000.0 );
    }
    n = fmod( n*28433 + 1, 10000000000.0);
	clock_t finish = clock();
    double duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("%.0lf\n", n);
    printf( "%f seconds\n", duration );
	
}