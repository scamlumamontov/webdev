n = int(input())
a = input().split()
for i in range(len(a)):
    if a[i] % 2 == 0:
        print(a[i], end=' ')