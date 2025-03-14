n = int(input())
a = []

for i in range(n):
    c = input().split()
    if c[0] == "append":
        a.append(a[1])
    elif c[0] == "insert":
        a.push((int)(c[1]), int(c[2]))
    elif c[0] == "remove":
        for j in range(a):
            if a[j] == c[1]:
                a.pop(j)
                break
    elif c[0] == "sort":
        a.sort()
    elif c[0] == "pop":
        a.pop()
    else:
        a = a[::-1]