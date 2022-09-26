import re
text = input()
patter = r"\b_([a-zA-Z0-9]+)\b"

matches = re.findall(patter, text)
print(",".join(matches))
