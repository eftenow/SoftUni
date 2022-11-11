def out_of_board(row, col, rows, cols):
    if row < 0:
        row = rows - 1
    elif row > rows - 1:
        row = 0
    elif col < 0:
        col = cols - 1
    elif col > cols - 1:
        col = 0
    return row, col


rows, cols = [int(x) for x in input().split(', ')]
matrix = []
current_row = 0
current_col = 0
all_items = 0

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1)

}

collected_items = {
    'D': ['Christmas decorations', 0],
    'G': ['Gifts', 0],
    'C': ['Cookies', 0]
}

for r in range(rows):
    info = input().split()
    matrix.append(info)
    if 'Y' in info:
        current_row = r
        current_col = info.index('Y')
    all_items += len([x for x in info if x in collected_items])

command = input()

while command != 'End':
    direction, steps = command.split('-')
    steps = int(steps)

    for step in range(steps):
        matrix[current_row][current_col] = 'x'
        current_row, current_col = directions[direction](current_row, current_col)
        if current_row not in range(rows) or current_col not in range(cols):
            current_row, current_col = out_of_board(current_row, current_col, rows, cols)
        current_position = matrix[current_row][current_col]

        if current_position in collected_items:
            collected_items[current_position][1] += 1
            all_items -= 1
        matrix[current_row][current_col] = 'Y'
        if not all_items:
            break
    if not all_items:
        break
    command = input()

if not all_items:
    print(f'Merry Christmas!')

print("You've collected:")
for _, item_amount in collected_items.items():
    item, amount = item_amount[0], int(item_amount[1])
    print(f' - {amount} {item}')

for row in range(rows):
    print(' '.join(matrix[row]))