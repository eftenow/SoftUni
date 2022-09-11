text = input().split()
total_sum = 0

for single_string in text:
    first_letter = single_string[0]
    last_letter = single_string[-1]
    number = int(single_string[1:-1])
    if first_letter.isupper():
        first_letter_position = ord(first_letter) - 64
        number /= first_letter_position
    else:
        first_letter_position = ord(first_letter) - 96
        number *= first_letter_position

    if last_letter.isupper():
        last_letter_position = ord(last_letter) - 64
        number -= last_letter_position
    else:
        last_letter_position = ord(last_letter) - 96
        number += last_letter_position

    total_sum += number

print(f"{total_sum:.2f}")
