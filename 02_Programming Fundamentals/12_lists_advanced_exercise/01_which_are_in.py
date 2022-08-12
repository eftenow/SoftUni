substrings = input().split(", ")
words = input()
list_of_matches = []
for substring in substrings:
    if substring in words:
        list_of_matches.append(substring)

print(list_of_matches)
