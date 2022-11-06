size = 8
matrix = []
king_row = 0
king_col = 0
queens = []
attacking_queens = []
directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1),
    'upleft': lambda x, y:(x - 1, y - 1),
    'upright': lambda x, y:(x - 1, y + 1),
    'downleft': lambda x, y:(x + 1, y - 1),
    'downright': lambda x, y:(x + 1, y + 1),

}
for r in range(size):
    info = input().split()
    matrix.append(info)
    for i in range(len(info)):
        if info[i] == 'K':
            king_row = r
            king_col = i
        elif info[i] == 'Q':
            queens.append([r, i])

for row, col in queens:
    attacker = False
    for direction in directions:
        queen_row, queen_col = row, col
        while not attacker:
            queen_row, queen_col = directions[direction](queen_row, queen_col)
            if queen_row not in range(size) or queen_col not in range(size):
                break
            elif matrix[queen_row][queen_col] == 'Q':
                break
            elif matrix[queen_row][queen_col] == 'K':
                attacking_queens.append([row, col])
                attacker = True

        if attacker:
            break

if attacking_queens:
    for q in attacking_queens:
        print(q)
else:
    print('The king is safe!')