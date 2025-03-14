def xor(a, b):
    if a == b and (a == 1 or b == 1):
        return 1
    return 0

a = int(input())
b = int(input())
print(xor(a, b))