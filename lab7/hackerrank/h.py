n = int(input())
a = []

for i in range(n):
    b = input().split()
c = input()

for i in range(n):
    if c == a[i][0]:
        avg = 0
        for j in range(1, 4):
            avg += a[i][j]
        avg /= 3
        print(avg)
        break