rows, cols = [int(x) for x in input().split()]
matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split()])

command = input().split()

while command[0] != "END":
    is_valid = False

    if command[0] == "swap" and len(command) == 5:
        if int(command[1]) in range(rows) and int(command[2]) in range(rows) and\
                int(command[3]) in range(cols) and int(command[4]) in range(cols):
            is_valid = True
            first_element = matrix[int(command[1])][int(command[2])]
            second_element = matrix[int(command[3])][int(command[4])]
            matrix[int(command[1])][int(command[2])] = second_element
            matrix[int(command[3])][int(command[4])] = first_element

    if is_valid:
        for current_row in range(rows):
            print(" ".join(list(map(str, matrix[current_row]))))
            
    else:
        print("Invalid input!")
    command = input().split()
