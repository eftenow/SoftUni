def valid_length(password):
    return "Valid Password" if 6 <= len(password) <= 10 else "Password must be between 6 and 10 characters"


def valid_elements(password):
    for letter in password:
        if not 48 <= ord(letter) <= 122:
            return "Password must consist only of letters and digits"
    return "Valid Password"


def valid_digits(password):
    digit_counter = 0
    for letter in password:
        if 48 <= ord(letter) <= 57:
            digit_counter += 1
    return "Valid Password" if digit_counter >= 2 else "Password must have at least 2 digits"


def find_all_invalid_elements(validationList):
    invalidElements = []
    for x in validationList:
        if x != "Valid Password":
            invalidElements.append(x)
    return "\n".join(invalidElements)


def validate_password(password):
    validationList = [valid_length(password), valid_elements(password), valid_digits(password)]
    return "Password is valid" if validationList.count("Valid Password") == 3 else find_all_invalid_elements(
        validationList)


password_input = input()
print(validate_password(password_input))
