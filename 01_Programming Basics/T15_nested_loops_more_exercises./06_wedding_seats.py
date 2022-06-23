import string

last_sector = input()  # B - Z
rows_in_first_sector = int(input())
odd_row_spaces = int(input())
counter = 0
first_space = 97  #A
alphabet = string.ascii_uppercase

for sector in alphabet:
    if sector != "A":
        rows_in_first_sector += 1
    for row in range(1, rows_in_first_sector + 1):

        if row % 2 == 0:
            for seat in range(first_space, (first_space + odd_row_spaces + 2)):
                seat = chr(seat)
                counter += 1
                print(sector, row, seat, sep='')
        else:
            for seat in range(first_space, first_space + odd_row_spaces):
                seat = chr(seat)
                counter += 1
                print(sector, row, seat, sep='')

    if sector == last_sector:
        break
print(counter)
