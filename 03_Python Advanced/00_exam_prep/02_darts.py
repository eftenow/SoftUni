size = 7
players = input().split(', ')
matrix = [[x for x in input().split()] for i in range(size)]
winner = 0
turn = 0
is_winner = False
points = [501, 501]

while True:
    turn += 1
    for player in range(len(players)):

        row, col = [int(x) for x in input().rstrip(')').lstrip('(').split(', ')]
        if row not in range(size) or col not in range(size):
            continue
        elif matrix[row][col] == 'B':
            is_winner = True
        elif matrix[row][col] == 'D' or matrix[row][col] == 'T':
            total = int(matrix[0][col]) + int(matrix[size - 1][col]) + int(matrix[row][0]) + \
                    int(matrix[row][size - 1])

            if matrix[row][col] == 'D':
                points[player] -= total * 2
            else:
                points[player] -= total * 3

        elif matrix[row][col].isdigit():
            points[player] -= int(matrix[row][col])

        if points[player] <= 0:
            is_winner = True
        if is_winner:
            winner = player
            break
    if is_winner:
        break

print(f'{players[winner]} won the game with {turn} throws!')
