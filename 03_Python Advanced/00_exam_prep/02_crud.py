import re

size = 6
matrix = [[x for x in input().split()] for i in range(size)]
current_row, current_col = [int(x) for x in re.findall(r'\d', input())]
directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1)
}

command = input()

while command != "Stop":
    command = command.split(', ')
    action, direction = command[0], command[1]
    current_row, current_col = directions[direction](current_row, current_col)
    current_pos = matrix[current_row][current_col]

    if action == 'Create':
        if current_pos == '.':
            value = command[2]
            matrix[current_row][current_col] = value
    elif action == 'Update':
        if current_pos != '.':
            value = command[2]
            matrix[current_row][current_col] = value
    elif action == 'Delete':
        if current_pos != '.':
            matrix[current_row][current_col] = '.'
    elif action == 'Read':
        if current_pos != '.':
            print(current_pos)

    command = input()

for r in range(size):
    print(' '.join(matrix[r]))