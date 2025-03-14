a = input()
b = input()

def pow(a, b):
    if b == 1:
        return 1
    elif b % 2 == 1:
        return pow(a, b - 1) * a
    else:
        x = pow(a, b // 2)
        return x * x

print(pow(a, b))