first = input()
second = input()
random_string = input()
first_value = ord(first)
second_value = ord(second)
characters_sum = 0

for random_char in random_string:
    for char_value in range(first_value+1, second_value):
        char = chr(char_value)
        if char == random_char:
            characters_sum += char_value

print(characters_sum)
