text = input()
non_repeating_chars = []

for char_position in range(len(text)):
    if text[char_position] != text[char_position - 1] or char_position == 0:
        non_repeating_chars.append(text[char_position])

print(''.join(non_repeating_chars))
