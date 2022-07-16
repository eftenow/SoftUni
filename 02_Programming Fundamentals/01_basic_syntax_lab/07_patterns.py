number = int(input())

for rows in range(number):
    for columns in range(rows+1):
        print("*", end="")
    print()
for rows in range(number-1, 0, -1):
    for columns in range(rows):
        print("*", end="")
    print()
