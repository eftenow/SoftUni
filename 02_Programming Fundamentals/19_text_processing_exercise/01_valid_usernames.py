usernames = input().split(", ")

for username in usernames:
    if 3 <= len(username) <= 16:
        current_word = ""
        is_valid = True
        for letter in username:
            if letter.isalnum() or letter == "_" or letter == "-":
                current_word += letter
            else:
                is_valid = False
                break
        if is_valid:
            print(username)
