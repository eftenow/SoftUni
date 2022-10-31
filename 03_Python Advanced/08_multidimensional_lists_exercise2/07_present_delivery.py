presents = int(input())
size = int(input())
matrix = []
santa_row = 0
santa_col = 0
nice_kids = 0
happy_kids = 0
directions = {
    'up': lambda x, y: (x-1, y),
    'down': lambda x, y: (x+1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1)
}

for r in range(size):
    info = input().split()
    matrix.append(info)
    if 'S' in info:
        santa_row = r
        santa_col = info.index('S')
    nice_kids += len([x for x in info if x == 'V'])

command = input()

while command != "Christmas morning":
    matrix[santa_row][santa_col] = '-'
    santa_row, santa_col = directions[command](santa_row, santa_col)
    position = matrix[santa_row][santa_col]
    if position == 'V':
        presents -= 1
        happy_kids += 1

    elif position == 'C':
        for direction in directions:
            next_row, next_col = directions[direction](santa_row, santa_col)
            if matrix[next_row][next_col] != 'V' and matrix[next_row][next_col] != 'X':
                continue
            if matrix[next_row][next_col] == 'V':
                happy_kids += 1
            matrix[next_row][next_col] = '-'
            presents -= 1
            if not presents:
                break
    matrix[santa_row][santa_col] = 'S'
    if not presents:
        break
    command = input()

if not presents and nice_kids != happy_kids:
    print('Santa ran out of presents!')

for r in range(size):
    print(' '.join(matrix[r]).rstrip())

if nice_kids == happy_kids:
    print(f'Good job, Santa! {nice_kids} happy nice kid/s.')
else:
    print(f'No presents for {nice_kids - happy_kids} nice kid/s.')
