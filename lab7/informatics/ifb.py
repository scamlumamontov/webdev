a = int(input())

if a % 100 == 0:
    if a % 400 == 0:
        print("YES")
    else:
        print("NO")
elif a % 4 == 0:
    print("YES")
else:
    print("NO")    
