rows = int(input())
matrix = []
current_r = 0
current_c = 0
coals = 0

commands = input().split()
is_over = False
coals_gathered = False

for r in range(rows):
    info = input().split()
    matrix.append(info)
    if "s" in info:
        current_r = r
        current_c = matrix[r].index("s")
    if "c" in info:
        coals += len([x for x in info if x == "c"])
all_coals = coals

for command in commands:
    if command == "up":
        if current_r - 1 in range(rows):
            current_r -= 1
    elif command == "down":
        if current_r + 1 in range(rows):
            current_r += 1
    elif command == "left":
        if current_c - 1 in range(rows):
            current_c -= 1
    elif command == "right":
        if current_c + 1 in range(rows):
            current_c += 1
    position = matrix[current_r][current_c]
    if position == "c":
        coals -= 1
        matrix[current_r][current_c] = "*"
        if coals == 0:
            coals_gathered = True
            break
    elif position == "e":
        is_over = True
        break

if coals_gathered:
    print(f"You collected all coal! ({current_r}, {current_c})")
elif is_over:
    print(f"Game over! ({current_r}, {current_c})")
else:
    print(f"{all_coals - coals} pieces of coal left. ({current_r}, {current_c})")
