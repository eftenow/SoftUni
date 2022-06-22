number = int(input())
counter = 0
number_reached = False
for rows in range(1, number+1):
    for columns in range(1, rows+1):
        counter += 1
        print(counter, end=" ")
        if counter == number:
            number_reached = True
            break
    print()
    if number_reached:
        break
