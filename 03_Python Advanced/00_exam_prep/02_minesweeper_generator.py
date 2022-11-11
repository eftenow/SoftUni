size = int(input())
number_of_bombs = int(input())
matrix = [[0 for x in range(size)] for i in range(size)]
directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1),
    'upright': lambda x, y: (x - 1, y + 1),
    'downright': lambda x, y: (x + 1, y + 1),
    'upleft': lambda x, y: (x - 1, y - 1),
    'downleft': lambda x, y: (x + 1, y - 1),

}
for r in range(number_of_bombs):
    bomb = [int(x) for x in input().strip('()').split(', ')]
    bomb_row, bomb_col = bomb
    matrix[bomb_row][bomb_col] = '*'

for row in range(size):
    for col in range(size):
        total = 0
        if matrix[row][col] == '*':
            continue
        for dir in directions:
            check_row, check_col = row, col

            check_row, check_col = directions[dir](check_row, check_col)
            if check_row not in range(size) or check_col not in range(size):
                continue
            elif matrix[check_row][check_col] == '*':
                total += 1
                continue
        matrix[row][col] = total

for row in range(size):
    print(' '.join(str(x) for x in matrix[row]))