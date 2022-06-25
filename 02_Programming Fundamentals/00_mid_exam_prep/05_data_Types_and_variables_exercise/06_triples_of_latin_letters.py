amount_of_letters = int(input()) # 2
starting_letter = 97
for a in range (starting_letter, starting_letter + amount_of_letters):
    for b in range(starting_letter, starting_letter + amount_of_letters):
        for c in range(starting_letter, starting_letter + amount_of_letters):
            print(chr(a) + chr(b) + chr(c))





