rows = int(input())
matrix = []
flatten_matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split(', ')])

for row in range(rows):
    flatten_matrix += matrix[row]

print(flatten_matrix)
