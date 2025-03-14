n = int(input())
a = input().split()
cnt = 0

for i in range(1, len(a)):
    if a[i - 1] * a[i] > 0:
        cnt += 1

if cnt > 0:
    print("YES")
else:
    print("NO")