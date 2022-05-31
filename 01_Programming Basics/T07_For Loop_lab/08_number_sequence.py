import sys

n = int(input())

biggest = -sys.maxsize
smallest = sys.maxsize
for i in range(0, n):
    num = int(input())

    if num > biggest:
        biggest = num
    if num < smallest:
        smallest = num
print(f"Max number: {biggest}")
print(f"Min number: {smallest}")
