n = int(input())
matrix = []

primary_diagonal = []
secondary_diagonal = []

for _ in range(n):
    matrix.append([int(x) for x in input().split()])

for row_ind in range(n):
    number = matrix[row_ind][row_ind]
    primary_diagonal.append(number)

for row_ind in range(n):
    col_ind = (n - 1) - row_ind
    number = matrix[row_ind][col_ind]
    secondary_diagonal.append(number)

first = sum(primary_diagonal)
second = sum(secondary_diagonal)
diff = abs(first - second)
print(diff)
