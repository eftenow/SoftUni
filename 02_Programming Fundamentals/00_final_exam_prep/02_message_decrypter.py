import re
pattern = r"^(\$|%)(?P<tag>[A-Z][a-z]{2,})\1: \[(?P<first>\d+)]\|\[(?P<second>\d+)]\|\[(?P<third>\d+)]\|$"
n_lines = int(input())
 
for _ in range(n_lines):
    message = input()
    valid_message = re.finditer(pattern, message)
    tag = ""
    decrypted = ""
    for match in valid_message:
        tag = match.group("tag")
        first = match.group("first")
        second = match.group("second")
        third = match.group("third")
        first = chr(int(first))
        second = chr(int(second))
        third = chr(int(third))
        decrypted = first + second + third
    if len(decrypted) != 0:
        print(f"{tag}: {decrypted}")
    else:
        print("Valid message not found!")
