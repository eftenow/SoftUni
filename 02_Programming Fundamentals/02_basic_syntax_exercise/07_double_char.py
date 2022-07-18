char = input()

while char != "End":
    current_word = ""
    if char != "SoftUni":
        for letter in char:
            current_word += letter*2
        print(f"{current_word}")
    char = input()
