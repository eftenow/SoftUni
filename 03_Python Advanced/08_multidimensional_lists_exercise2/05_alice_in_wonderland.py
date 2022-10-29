size = int(input())
matrix = []
a_row = 0
a_col = 0
tea_bags = 0
directions = {
    'up': lambda row, col: (row - 1, col),
    'down': lambda row, col: (row + 1, col),
    'left': lambda row, col: (row, col - 1),
    'right': lambda row, col: (row, col + 1)
}

for r in range(size):
    row_elements = input().split()
    matrix.append(row_elements)
    if "A" in row_elements:
        a_row = r
        a_col = row_elements.index("A")

is_out = False
command = input()

while True:
    matrix[a_row][a_col] = '*'
    a_row, a_col = directions[command](a_row, a_col)
    if a_row not in range(size) or a_col not in range(size):
        is_out = True
        break
        
    elif matrix[a_row][a_col] == "R":
        matrix[a_row][a_col] = '*'
        is_out = True
        break
        
    elif matrix[a_row][a_col].isdigit():
        tea_bags += int(matrix[a_row][a_col])
        matrix[a_row][a_col] = '*'
        if tea_bags >= 10:
            break

    command = input()

if is_out:
    print("Alice didn't make it to the tea party.")
else:
    print("She did it! She went to the party.")

for r in range(size):
    print(' '.join(matrix[r]))
