n = int(input())
a = input().split()
cnt = 0

for i in range(len(a)):
    if a[i] > 0:
        cnt += 1
print(cnt)