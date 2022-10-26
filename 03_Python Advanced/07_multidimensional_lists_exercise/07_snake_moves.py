from collections import deque

rows, cols = [int(x) for x in input().split()]
snake = deque(input())

matrix = []

for r in range(rows):
    matrix.append([])
    for c in range(cols):
        matrix[r].append("")

for row in range(rows):
    if row % 2 == 0:
        for col in range(cols):
            letter = snake.popleft()
            snake.append(letter)
            matrix[row][col] = letter
    else:
        for col in range(cols - 1, -1, -1):
            letter = snake.popleft()
            snake.append(letter)
            matrix[row][col] = letter
    print(''.join(matrix[row]))
