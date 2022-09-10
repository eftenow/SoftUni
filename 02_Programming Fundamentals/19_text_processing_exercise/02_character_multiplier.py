words = input().split()
first_word = words[0]
second_word = words[1]
total_value = 0

first_word_len = len(first_word)
second_word_len = len(second_word)
number_of_iterations = max(first_word_len, second_word_len)
for i in range(number_of_iterations):
    if i < first_word_len and i < second_word_len:
        current_char = ord(first_word[i]) * ord(second_word[i])
        total_value += current_char
    else:
        if i >= first_word_len:
            total_value += ord(second_word[i])
        elif i >= second_word_len:
            total_value += ord(first_word[i])

print(total_value)
