words = input()
letters = {}

for w in words:
    if w != " ":
        if w not in letters:
            letters[w] = 1
        else:
            letters[w] += 1

for key, value in letters.items():
    print(f"{key} -> {value}")
