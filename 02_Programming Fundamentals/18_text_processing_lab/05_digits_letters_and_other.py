text = input()
numbers = ''
letters = ''
symbols = ''
for char in text:
    if char.isdigit():
        numbers += char
    elif char.isalpha():
        letters += char
    else:
        symbols += char

print(f"{numbers} \n{letters} \n{symbols}")
