number_of_donations = input().split(", ")
beggars = int(input())

int_list = []
final_list = []
counter = 0
temp_sum = 0

for i in range(len(number_of_donations)):
    int_list.append(int(number_of_donations[i]))

while counter < beggars:

    for index in range(counter, len(int_list), beggars):
        temp_sum += int_list[index]
    final_list.append(temp_sum)
    temp_sum = 0
    counter += 1
print(final_list)


