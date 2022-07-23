word = input()
len_word = len(word)
capital_letters = []
letter = ""
for index in range(len_word):
    letter = word[index]
    letter_ascii = ord(letter)
    if 65 <= letter_ascii <= 90:
        capital_letters.append(index)
print(capital_letters)
