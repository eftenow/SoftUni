word = input()
reversed_word = ""

word_len = len(word)
for letter in range(word_len - 1, -1, - 1):
    reversed_word += word[letter]
print(reversed_word)
