rows, cols = [int(x) for x in input().split()]
matrix = []
player_row = 0
player_col = 0
is_winner = False
bunnies = set()
directions = {
    'U': lambda x, y: (x - 1, y),
    'D': lambda x, y: (x + 1, y),
    'L': lambda x, y: (x, y - 1),
    'R': lambda x, y: (x, y + 1)
}
for r in range(rows):
    info = input()
    if 'P' in info:
        player_row = r
        player_col = info.index('P')
    matrix.append(list(info))
commands = input()
matrix[player_row][player_col] = '.'

for direction in commands:
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 'B':
                bunnies.add((r, c))
    for bunny_row, bunny_col in bunnies.copy():
        if bunny_row + 1 in range(rows):
            bunnies.add((bunny_row + 1, bunny_col))
            matrix[bunny_row + 1][bunny_col] = 'B'
        if bunny_row - 1 in range(rows):
            bunnies.add((bunny_row - 1, bunny_col))
            matrix[bunny_row - 1][bunny_col] = 'B'
        if bunny_col + 1 in range(cols):
            bunnies.add((bunny_row, bunny_col + 1))
            matrix[bunny_row][bunny_col + 1] = 'B'
        if bunny_col - 1 in range(cols):
            bunnies.add((bunny_row, bunny_col - 1))
            matrix[bunny_row][bunny_col - 1] = 'B'
    row_step, col_step = directions[direction](player_row, player_col)
    if row_step not in range(rows) or col_step not in range(cols):
        is_winner = True
        break
    player_row, player_col = row_step, col_step
    if matrix[row_step][col_step] == 'B':
        break

for r in range(rows):
    print(''.join(matrix[r]))

if is_winner:
    print(f'won: {player_row} {player_col}')
else:
    print(f'dead: {player_row} {player_col}')
