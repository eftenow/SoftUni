text = input()
size = int(input())
player_row = 0
player_col = 0
matrix = []
directions = {
    'up': lambda x, y: (x-1, y),
    'down': lambda x, y: (x+1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1),
}
for r in range(size):
    info = [x for x in input()]
    matrix.append(info)
    if 'P' in info:
        player_row = r
        player_col = info.index('P')

n = int(input())

for _ in range(n):
    command = input()
    matrix[player_row][player_col] = '-'
    row, col = directions[command](player_row, player_col)
    if row not in range(size) or col not in range(size):
        text = text[:-1]
        row, col = player_row, player_col
    elif matrix[row][col] == '-':
        pass
    else:
        text += matrix[row][col]
    player_row, player_col = row, col
    matrix[player_row][player_col] = 'P'

print(text)
for row in range(size):
    print(''.join(matrix[row]))