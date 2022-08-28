words_number = int(input())
word_synonyms = {}

for _ in range(words_number):
    word = input()
    synonym = input()

    if word not in word_synonyms:
        word_synonyms[word] = synonym

    else:
        word_synonyms[word] += f", {synonym}"

for word in word_synonyms:
    print(f"{word} - {word_synonyms[word]}")
