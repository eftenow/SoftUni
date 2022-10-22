size = int(input())
matrix = []
symbol_found = False
for _ in range(size):
    matrix.append(input())

symbol = input()

for r in range(size):
    for c in range(size):
        if matrix[r][c] == symbol:
            print(f'({r}, {c})')
            symbol_found = True
            break
    if symbol_found:
        break

if not symbol_found:
    print(f'{symbol} does not occur in the matrix')
