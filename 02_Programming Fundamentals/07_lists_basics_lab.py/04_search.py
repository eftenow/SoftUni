number_of_lines = int(input())
word = input()
my_list = []
second_list = []
for line in range(number_of_lines):
    current_line = input()
    my_list.append(current_line)
    if word in current_line:
        second_list.append(current_line)
print(my_list)
print(second_list)
