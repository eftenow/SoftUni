def attack(field, square):
    destroyed_ships = 0
    
    for tokens in square:
        turn = tokens.split('-')
        row = int(turn[0])
        col = int(turn[1])

        if field[row][col] > 0:
            field[row][col] -= 1
            if field[row][col] == 0:
                destroyed_ships += 1

    return destroyed_ships


rows = int(input())
fields = []
for _ in range(rows):
    temp_field = input().split()
    fields.append(list(map(int, ''.join(temp_field))))
    
square_attacked = input().split()

print(attack(fields, square_attacked))
