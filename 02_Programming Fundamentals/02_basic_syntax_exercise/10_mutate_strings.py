first = input()
second = input()
previous_word = first
first_len = len(first)

for index in range(first_len):
    new_word = ""
    for start in range(index+1):
        new_word += second[start]
    for ending in range(index+1, first_len):
        new_word += first[ending]
    if previous_word == new_word:
        continue
    print(new_word)
    previous_word = new_word

