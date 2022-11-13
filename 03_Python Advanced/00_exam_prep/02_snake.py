size = int(input())
matrix = []
snake_row = 0
snake_col = 0
burrows = []
food_eaten = 0
out_of_territory = False

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'right': lambda x, y: (x, y + 1),
    'left': lambda x, y: (x, y - 1),
}
for r in range(size):
    info = [x for x in input()]
    matrix.append(info)
    for c in range(len(info)):
        el = info[c]
        if el == 'S':
            snake_row = r
            snake_col = c
        elif el == 'B':
            burrows.append([r, c])

while True:
    matrix[snake_row][snake_col] = '.'
    direction = input()
    snake_row, snake_col = directions[direction](snake_row, snake_col)
    if snake_row not in range(size) or snake_col not in range(size):
        out_of_territory = True
        break

    position = matrix[snake_row][snake_col]

    if position == '*':
        food_eaten += 1
        if food_eaten == 10:
            matrix[snake_row][snake_col] = 'S'
            break

    elif position == 'B':
        burrows.remove([snake_row, snake_col])
        matrix[snake_row][snake_col] = '.'
        burrow_row, burrow_col = burrows[0]
        snake_row, snake_col = burrow_row, burrow_col

    matrix[snake_row][snake_col] = 'S'

if out_of_territory:
    print(f'Game over!')
else:
    print(f'You won! You fed the snake.')

print(f'Food eaten: {food_eaten}')

for row in range(size):
    print(''.join(matrix[row]))