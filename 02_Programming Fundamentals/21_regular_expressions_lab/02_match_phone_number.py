import re
phone_numbers = input()

valid_numbers = re.findall(r"\+359 2 \d{3} \d{4}|\+359-2-\d{3}-\d{4}\b", phone_numbers)
print(", ".join(valid_numbers))
