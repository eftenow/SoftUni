substrings = input().split(", ")
words = input().split(", ")
list_of_matches = []
for substring in substrings:
    for word in words:
        if substring in word:
            list_of_matches.append(substring)
            break

print(list_of_matches)
