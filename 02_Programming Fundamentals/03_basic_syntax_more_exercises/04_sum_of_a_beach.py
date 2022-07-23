word = input()
word = word.lower()
my_list = ["sand", "water", "fish", "sun"]
counter = 0

for item in my_list:
    if item in word:
        word_count = word.count(item)
        counter += word_count
print(counter)
