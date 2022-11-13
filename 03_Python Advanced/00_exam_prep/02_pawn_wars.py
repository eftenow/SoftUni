def attack(row, col, matrix, player, size):
    enemy = 'b'
    if player % 2 == 0:
        enemy = 'w'
    if row in range(size) and col in range(size) and matrix[row][col] == enemy:
        return True

size = 8
matrix = []
black_row = 0
black_col = 0
white_row = 0
white_col = 0
# white moves +1 row, back -1

for r in range(size):

    info = input().split()
    matrix.append(info)
    if 'b' in info:
        black_row = r
        black_col = info.index('b')
    elif 'w' in info:
        white_row = r
        white_col = info.index('w')
player = 1

while True:
    if player % 2 != 0: # WHITE
        matrix[white_row][white_col] = '-'
        if white_row - 1 == 0:
            print(f'Game over! White pawn is promoted to a queen at {chr(white_col + 97)}8.')
            break
        elif attack(white_row - 1, white_col - 1, matrix, player, size):
            print(f'Game over! White win, capture on {chr(white_col - 1 + 97)}{size - (white_row - 1)}.')
            break
        elif attack(white_row - 1, white_col + 1, matrix, player, size):
            print(f'Game over! White win, capture on {chr(white_col + 1 + 97)}{size- (white_row - 1)}.')
            break
        white_row -= 1
        matrix[white_row][white_col] = 'w'

    else: # BLACK
        matrix[black_row][black_col] = '-'
        if black_row + 1 == size - 1:
            print(f'Game over! Black pawn is promoted to a queen at {chr(black_col + 97)}1.')
            break
        elif attack(black_row + 1, black_col - 1, matrix, player, size):
            print(f'Game over! Black win, capture on {chr(black_col - 1 + 97)}{size - (black_row + 1)}.')
            break
        elif attack(black_row + 1, black_col + 1, matrix, player, size):
            print(f'Game over! Black win, capture on {chr(black_col + 1 + 97)}{size - (black_row + 1)}.')
            break

        black_row += 1
        matrix[black_row][black_col] = 'b'
    player += 1
