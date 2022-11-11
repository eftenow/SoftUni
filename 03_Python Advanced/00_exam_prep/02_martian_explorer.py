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

size = 6
matrix = []
rover_row = 0
rover_col = 0

for r in range(size):
    info = input().split()
    matrix.append(info)
    if 'E' in info:
        rover_row = r
        rover_col = info.index('E')

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1)
}
deposits = {
    'W': ['Water deposit', 0],
    'M': ['Metal deposit', 0],
    'C': ['Concrete deposit', 0],
}

commands = input().split(', ')

for command in commands:
    rover_row, rover_col = directions[command](rover_row, rover_col)

    if rover_row not in range(size) or rover_col not in range(size):
        rover_row, rover_col = out_of_board(rover_row, rover_col, size)

    pos = matrix[rover_row][rover_col]
    
    if pos == 'W' or pos == 'M' or pos == 'C':
        print(f'{deposits[pos][0]} found at ({rover_row}, {rover_col})')
        deposits[pos][1] += 1

    elif pos == 'R':
        print(f'Rover got broken at ({rover_row}, {rover_col})')
        break

deposits_found = True
for dep, dep_info in deposits.items():
    value = int(dep_info[1])
    if value == 0:
        deposits_found = False
        break

if deposits_found:
    print("Area suitable to start the colony.")
else:
    print("Area not suitable to start the colony.")