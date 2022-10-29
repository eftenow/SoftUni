rows = int(input())
matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split()])

command = input().split()

while command[0] != "END":
    action, row, col, value = command[0], int(command[1]), int(command[2]), int(command[3])
    if row in range(rows) and col in range(rows):
        if action == "Add":
            matrix[row][col] += value
        elif action == "Subtract":
            matrix[row][col] -= value
    else:
        print("Invalid coordinates")
    command = input().split()

for r in range(rows):
    print(' '.join(str(x) for x in matrix[r]))
