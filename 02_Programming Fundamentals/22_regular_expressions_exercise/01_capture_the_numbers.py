import re

full_text = ''
text = input()
while True:
    if text:
        full_text += f" {text}"
        text = input()
    else:
        break

numbers_in_text = re.findall(r"\d+", full_text)
print(" ".join(numbers_in_text))
