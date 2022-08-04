def chars_in_range(a, b):
    a = ord(a)
    b = ord(b)
    chars = []
    for ascii_number in range(a + 1, b):
        chars.append(chr(ascii_number))
    return " ".join(chars)


first = input()
second = input()
print(chars_in_range(first, second))
