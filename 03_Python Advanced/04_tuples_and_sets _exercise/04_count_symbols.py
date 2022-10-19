text = input()
letters = {}

for letter in text:
    if letter not in letters:
        letters[letter] = 0
    letters[letter] += 1


for letter, occurrences in sorted(letters.items()):
    print(f'{letter}: {occurrences} time/s')
