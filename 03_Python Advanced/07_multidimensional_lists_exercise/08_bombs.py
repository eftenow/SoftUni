rows = int(input())
matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split()])

bombs = input().split()

for ind in range(len(bombs)):
    tokens = bombs[ind].split(",")
    row, col = int(tokens[0]), int(tokens[1])
    bomb = matrix[row][col]
    if bomb <= 0:
        continue
    else:
        if row - 1 in range(rows) and col - 1 in range(rows):  # -1, -1
            if matrix[row - 1][col - 1] > 0:
                matrix[row - 1][col - 1] -= bomb
        if row - 1 in range(rows):             # -1, 0
            if matrix[row - 1][col] > 0:
                matrix[row - 1][col] -= bomb
        if row - 1 in range(rows) and col + 1 in range(rows):  # -1, + 1
            if matrix[row - 1][col + 1] > 0:
                matrix[row - 1][col + 1] -= bomb
        if col - 1 in range(rows):             # 0, -1
            if matrix[row][col - 1] > 0:
                matrix[row][col - 1] -= bomb
        if col + 1 in range(rows):       ####                     # 0, 1
            if matrix[row][col + 1] > 0:
                matrix[row][col + 1] -= bomb
        if row + 1 in range(rows) and col - 1 in range(rows):  # 1, -1
            if matrix[row + 1][col - 1] > 0:
                matrix[row + 1][col - 1] -= bomb
        if row + 1 in range(rows):  # 1, 0
            if matrix[row + 1][col] > 0:
                matrix[row + 1][col] -= bomb
        if row + 1 in range(rows) and col + 1 in range(rows):  # 1, 1
            if matrix[row + 1][col + 1] > 0:
                matrix[row + 1][col + 1] -= bomb
        matrix[row][col] = 0

alive_cells = []

for r in range(rows):
    for c in range(rows):
        if matrix[r][c] > 0:
            alive_cells.append(int(matrix[r][c]))


print(f"Alive cells: {len(alive_cells)}")
print(f"Sum: {sum(alive_cells)}")
for row_ind in range(rows):
    print(' '.join(str(x) for x in matrix[row_ind]))
