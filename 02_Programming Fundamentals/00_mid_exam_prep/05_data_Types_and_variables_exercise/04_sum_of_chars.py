number_of_characters = int(input())
total_sum = 0
for character in range(number_of_characters):
    char = input()
    char_ascii = ord(char)
    total_sum += char_ascii

print(f"The sum equals: {total_sum}")
