from math import floor
def out_of_board(row, col, board_size):
    if row < 0:
        row = board_size - 1
    elif row > board_size - 1:
        row = 0
    elif col < 0:
        col = board_size - 1
    elif col > board_size - 1:
        col = 0
    return row, col


size = int(input())
matrix = []
player_row = 0
player_col = 0
coins = 0
hit_wall = False
coins_collected = False

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1)
}
for r in range(size):
    info = input().split()
    matrix.append(info)
    if 'P' in info:
        player_row = r
        player_col = info.index('P')

path = [[player_row, player_col]]

while True:
    command = input()
    matrix[player_row][player_col] = '0'

    if command not in directions:
        continue
    player_row, player_col = directions[command](player_row, player_col)
    if player_row not in range(size) or player_col not in range(size):
        player_row, player_col = out_of_board(player_row, player_col, size)
    path.append([player_row, player_col])
    if matrix[player_row][player_col] == 'X':
        hit_wall = True
        break
    else:
        coins += int(matrix[player_row][player_col])
        if coins >= 100:
            coins_collected = True
            break

if coins_collected:
    print(f"You won! You've collected {coins} coins.")
elif hit_wall:
    print(f"Game over! You've collected {floor(coins / 2)} coins.")

print('Your path:')
for step in path:
    print(step)