key = int(input())
chars = int(input())
decrypted_word = ""
for _ in range(chars):
    letter = input()
    ascii_value = ord(letter) + key
    new_letter = chr(ascii_value)
    decrypted_word += new_letter
print(decrypted_word)
