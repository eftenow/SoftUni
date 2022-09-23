import re
numbers = input()

matches = r"(^|(?<=\s))-?(0|[1-9][0-9]*)(\.\d+)?($|(?=\s))"
matching_numbers = re.finditer(matches, numbers)

for number in matching_numbers:
    print(number.group(), end=" ")
