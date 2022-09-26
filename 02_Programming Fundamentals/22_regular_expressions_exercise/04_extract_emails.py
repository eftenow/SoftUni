import re

text = input()
matches = r"(^|(?<=\s))([A-Za-z0-9]+)((.|,|-|_)\w+)?@[a-z]+([-|\.])[a-z]+([-|\.][a-z]+)*"

emails = re.finditer(matches, text)
emails = [print(email.group()) for email in emails]
