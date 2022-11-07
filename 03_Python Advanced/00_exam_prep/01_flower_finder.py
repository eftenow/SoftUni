from collections import deque
vowels = deque(input().split())  # first
consonants = deque(input().split())

words = ['rose', 'tulip', 'lotus', 'daffodil']
check_words = ['rose', 'tulip', 'lotus', 'daffodil']
found_word = False

while vowels and consonants:
    vowel = vowels.popleft()
    consonant = consonants.pop()
    for i in range(len(words)):
        word = words[i]
        for letter in word:
            if letter == vowel or letter == consonant:
                word = word.replace(letter, '')
                if word:
                    words[i] = word
                else:
                    print(f'Word found: {check_words[i]}')
                    found_word = True
    if found_word:
        break

if not found_word:
    print('Cannot find any word!')

if vowels:
    print(f'Vowels left: {" ".join(vowels)}')

if consonants:
    print(f'Consonants left: {" ".join(consonants)}')


