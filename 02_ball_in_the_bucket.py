size = 6
matrix = [[x for x in input().split()] for i in range(size)]
points = 0
directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y)
}
for _ in range(3):
    row, col = [int(x) for x in input().rstrip(")").lstrip("(").split(', ')]
    if row not in range(size) or col not in range(size) or matrix[row][col] != 'B':
        continue
    matrix[row][col] = 0

    for direction in directions:
        r, c = row, col
        while True:
            r, c = directions[direction](r, c)
            if r not in range(size):
                break
            points += int(matrix[r][c])

if points < 100:
    print(f'Sorry! You need {100 - points} points more to win a prize.')
elif 100 <= points < 199:
    print(f"Good job! You scored {points} points, and you've won Football.")
elif 200 <= points <= 299:
    print(f"Good job! You scored {points} points, and you've won Teddy Bear.")
elif points >= 300:
    print(f"Good job! You scored {points} points, and you've won Lego Construction Set.")