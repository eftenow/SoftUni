number_of_electrons = int(input())
filled_shells = []
shield = 0

while number_of_electrons > 1:
    shield += 1
    electrons_needed = 2 * (shield**2)

    if number_of_electrons >= electrons_needed :
        number_of_electrons -= electrons_needed
    else:
        electrons_needed = number_of_electrons
        number_of_electrons = 0
    filled_shells.append(electrons_needed)
print(filled_shells)
