import re

pattern = r"(@|#)(?P<first>[A-Za-z]{3,})\1{2}(?P<second>[A-Za-z]{3,})\1"
text = input()
mirror_words = []
valid_pairs = 0
hidden_words = re.finditer(pattern, text)

for word in hidden_words:
    first_word = word.group("first")
    second_word = word.group("second")
    reversed_word = second_word[::-1]
    valid_pairs += 1
    if first_word == reversed_word:
        mirror_word = f"{first_word} <=> {second_word}"
        mirror_words.append(mirror_word)

if valid_pairs == 0:
    print("No word pairs found!")
else:
    print(f"{valid_pairs} word pairs found!")

if len(mirror_words) == 0:
    print("No mirror words!")
else:
    print("The mirror words are:")
    print(', '.join(mirror_words))
