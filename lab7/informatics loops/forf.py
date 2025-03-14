x = input()
x = x[::-1]
ok = 0
for i in x:
    if(i != '0' or ok != 0):
        print(i, end='')
        ok = 1