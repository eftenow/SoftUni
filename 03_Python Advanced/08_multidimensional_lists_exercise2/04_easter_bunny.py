import sys

size = int(input())
matrix = []
bunny_row = 0
bunny_col = 0
most_eggs = -sys.maxsize
best_direction = ""
best_path = []
directions = {'up': [], "down": [], 'right': [], "left": []}
directions_sums = {'up': 0, "down": 0, 'right': 0, "left": 0}

for i in range(size):
    info = input().split()
    matrix.append(info)
    if 'B' in info:
        bunny_row = i
        bunny_col = info.index("B")

for row in range(1, size + 1):
    if bunny_col + row in range(size):
        if matrix[bunny_row][bunny_col + row] == "X":
            break
        directions['right'].append([bunny_row, bunny_col + row])
        directions_sums['right'] += int(matrix[bunny_row][bunny_col + row])

for row in range(1, size + 1):
    if bunny_row - row in range(size):
        if matrix[bunny_row - row][bunny_col] == "X":
            break
        directions['up'].append([bunny_row - row, bunny_col])
        directions_sums['up'] += int(matrix[bunny_row - row][bunny_col])

for row in range(1, size + 1):
    if bunny_row + row in range(size):
        if matrix[bunny_row + row][bunny_col] == "X":
            break
        directions['down'].append([bunny_row + row, bunny_col])
        directions_sums['down'] += int(matrix[bunny_row + row][bunny_col])

for row in range(1, size + 1):
    if bunny_col - row in range(size):
        if matrix[bunny_row][bunny_col - row] == "X":
            break
        directions['left'].append([bunny_row, bunny_col - row])
        directions_sums['left'] += int(matrix[bunny_row][bunny_col - row])

for direction, value in directions_sums.items():
    if int(value) > most_eggs and directions[direction]:
        most_eggs = value
        best_direction = direction

print(best_direction)
for cords in directions[best_direction]:
    print(cords)
print(most_eggs)
