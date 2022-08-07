vowels = ['a', 'o', 'u', 'e', 'i']
word = input()

no_vowels_word = list(filter(lambda x: x not in vowels, word))
print("".join(no_vowels_word))
