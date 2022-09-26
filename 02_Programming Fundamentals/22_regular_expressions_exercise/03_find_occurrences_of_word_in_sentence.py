import re
text = input().lower()
match_word = input().lower()

matches = re.findall(fr"\b{match_word}\b", text)
print(len(matches))
