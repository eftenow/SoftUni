def sum_numbers(a, b, c):
    return a + b


def subtract(a, b, c):
    result = sum_numbers(a, b, c)
    return result - c


a = int(input())
b = int(input())
c = int(input())

print(subtract(a, b, c))
