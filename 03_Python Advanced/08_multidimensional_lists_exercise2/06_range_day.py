size = 5
matrix = []
current_row = 0
current_col = 0
targets_shot = []
total_targets = 0
directions = {
    'up': lambda x, y, z: (x - z, y),
    'down': lambda x, y, z: (x + z, y),
    'right': lambda x, y, z: (x, y + z),
    'left': lambda x, y, z: (x, y - z),
}
for r in range(size):
    info = input().split()
    matrix.append(info)
    for c in range(len(info)):
        if info[c] == 'A':
            current_row = r
            current_col = c
        elif info[c] == 'x':
            total_targets += 1

n = int(input())

for _ in range(n):
    command = input().split()
    action, direction = command[0], command[1]
    if action == 'move':
        steps = int(command[2])
        next_row, next_col = directions[direction](current_row, current_col, steps)
        if next_row in range(size) and next_col in range(size) and matrix[next_row][next_col] == '.':
            matrix[current_row][current_col] = '.'
            current_row, current_col = next_row, next_col
            matrix[current_row][current_col] = 'A'
    elif action == 'shoot':
        next_row, next_col = directions[direction](current_row, current_col, 1)
        while next_row in range(size) and next_col in range(size):
            current_target = matrix[next_row][next_col]
            if matrix[next_row][next_col] == 'x':
                targets_shot.append([next_row, next_col])
                matrix[next_row][next_col] = '.'
                break
            next_row, next_col = directions[direction](next_row, next_col, 1)
        if len(targets_shot) == total_targets:
            break

if len(targets_shot) == total_targets:
    print(f"Training completed! All {total_targets} targets hit.")
else:
    print(f'Training not completed! {total_targets - len(targets_shot)} targets left.')

for coordinates in targets_shot:
    print(coordinates)
