rows = [int(x) for x in input().split(', ')]


matrix = []
total_sum = 0

for row in range(rows[0]):
    numbers = [int(x) for x in input().split(", ")]
    total_sum += sum(numbers)
    matrix.append(numbers)

print(total_sum)
print(matrix)
