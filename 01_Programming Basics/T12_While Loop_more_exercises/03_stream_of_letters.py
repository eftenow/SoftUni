import string
possible_letters = string.ascii_letters
c_count = 0
o_count = 0
n_count = 0
word = ""
sentence = ""


while True:
    if c_count == 1 and o_count == 1 and n_count == 1:
        sentence = sentence + word + " "
        c_count = 0
        o_count = 0
        n_count = 0
        word = ""

        continue
    letter = input()
    if letter == "End":
        print(sentence)
        break
    if letter not in possible_letters:
        continue
    if letter == "c" and c_count == 0:
        c_count += 1
        continue
    elif letter == "o" and o_count == 0:
        o_count += 1
        continue
    elif letter == "n" and n_count == 0:
        n_count += 1
        continue

    word += letter
