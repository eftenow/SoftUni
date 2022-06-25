message = input().split()
dec_message = []

for word in message:
    num_as_str = []
    word_list = list(word)
    while word_list[0].isdigit():
        num_as_str.append(word_list[0])
        word_list.pop(0)

    num_as_str = "".join(num_as_str)
    num_as_str = chr(int(num_as_str))
    word_list.insert(0, num_as_str)

    if len(word_list) > 2:
        second_char = word_list[1]
        last_char = word_list[-1]
        word_list[1], word_list[-1] = last_char, second_char

    dec_message.append(''.join(word_list))

print(' '.join(dec_message))