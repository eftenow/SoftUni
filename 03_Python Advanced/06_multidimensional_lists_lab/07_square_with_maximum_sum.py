rows, cols = [int(x) for x in input().split(', ')]
matrix = []
maximum_sum = 0
best_square = []
for _ in range(rows):
    matrix.append([int(x) for x in input().split(', ')])

for row in range(rows - 1):
    for col in range(cols - 1):
        first = matrix[row][col]
        second = matrix[row][col + 1]
        third = matrix[row + 1][col]
        fourth = matrix[row + 1][col + 1]
        total = first + second + third + fourth

        if total > maximum_sum:
            best_square.clear()
            maximum_sum = total
            best_square.append([first, second])
            best_square.append([third, fourth])

for r in range(len(best_square)):
    print(' '.join([str(x) for x in best_square[r]]))

print(maximum_sum)
