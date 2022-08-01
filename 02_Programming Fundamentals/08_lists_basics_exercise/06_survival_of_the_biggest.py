import sys
numbers = input().split()
numbers_to_remove = int(input())
numbers_list = []

for i in range(len(numbers)):
    numbers_list.append(int(numbers[i]))

for removal in range(numbers_to_remove):
    smallest_number = sys.maxsize
    for i in range(len(numbers_list)):
        test_number = numbers_list[i]

        if test_number < smallest_number:
            smallest_number = test_number
    if smallest_number in numbers_list:
        numbers_list.remove(smallest_number)
numbers = str(numbers_list)[1:-1]
print(numbers)
