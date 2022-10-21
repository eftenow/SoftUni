rows = int(input())

matrix = []

for _ in range(rows):
    numbers = [int(x) for x in input().split(", ")]
    even_numbers = [int(x) for x in numbers if x % 2 == 0]
    matrix.append(even_numbers)

print(matrix)
