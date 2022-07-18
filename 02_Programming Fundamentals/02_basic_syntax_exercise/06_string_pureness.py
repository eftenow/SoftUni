number_of_strings = int(input())
characters = ",", ".", "_"

for string in range(number_of_strings):
    word = input()
    not_pure = False
    for char in characters:
        if char in word:
            not_pure = True
            break

    if not_pure:
        print(f"{word} is not pure!")
    else:
        print(f"{word} is pure.")
