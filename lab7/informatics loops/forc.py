import math
a = int(input())
b = int(input())
for i in range(a, b + 1):
    q = (int)(math.sqrt(i))
    if q * q == i:
        print(i, end=' ')