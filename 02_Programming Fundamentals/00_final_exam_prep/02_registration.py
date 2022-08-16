import re
n = int(input())
pattern = r"^U\$([A-Z][a-z]{2,})U\$P@\$([a-z]{5,}[0-9]+)P@\$$"
count = 0
for i in range(n):
    password = input()
    match = re.match(pattern, password)
    if not match:
        print("Invalid username or password")
    elif match:
        count += 1
        print("Registration was successful")
        print(f"Username: {match.group(1)}, Password: {match.group(2)}")
    else:
        break
print(f"Successful registrations: {count}")
