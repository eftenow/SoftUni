numbers = input()
numbers_list = numbers.split()
new_list = []
for i in range(len(numbers_list)):
    new_number = int(numbers_list[i]) * (-1)
    new_list.append(new_number)
print(new_list)
