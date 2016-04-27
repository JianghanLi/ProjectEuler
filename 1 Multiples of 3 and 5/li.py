def sum1toN(n):
   return n * (n + 1) / 2

def sumMultiples(limit, a):
   return sum1toN((limit - 1) / a) * a

print sumMultiples(1000, 3) + sumMultiples(1000, 5) - sumMultiples(1000, 15)