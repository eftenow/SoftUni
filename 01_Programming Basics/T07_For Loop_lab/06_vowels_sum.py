text = input()
s = 0
text_len = len(text)

for i in range(0, text_len):
    if text[i] == "a":
        s += 1
    elif text[i] == "e":
        s += 2
    elif text[i] == "i":
        s += 3
    elif text[i] == "o":
        s += 4
    elif text[i] == "u":
        s += 5
print(s)
