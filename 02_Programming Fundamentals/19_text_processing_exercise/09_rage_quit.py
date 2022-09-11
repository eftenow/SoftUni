text = input()
rage_quit_text = ""
text_to_multiply = ""
for char_position in range(len(text)):

    if text[char_position].isdigit():
        multiplier = text[char_position]
        gg = len(text)
        if char_position in range(len(text)-1):
            if text[char_position+1].isdigit():
                multiplier = text[char_position] + text[char_position+1]

        text_to_multiply *= int(multiplier)
        rage_quit_text += text_to_multiply.upper()
        text_to_multiply = ""
    else:
        text_to_multiply += text[char_position]

unique_symbols = len(set(rage_quit_text))

print(f"Unique symbols used: {unique_symbols}")
print(rage_quit_text)
