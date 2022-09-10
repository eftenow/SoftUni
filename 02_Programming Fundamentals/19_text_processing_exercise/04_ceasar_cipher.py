text = input()
encrypted_text = ""

for char in text:
    char_value = ord(char) + 3
    new_char = chr(char_value)
    encrypted_text += new_char

print(encrypted_text)
