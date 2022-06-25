first_list = input().split(", ")
second_list = input().split(", ") ##or don't convert it to list, and check if first list is contained in second
third_list = []


for i in first_list:
    for o in second_list:
        if i in o and i not in third_list:
            third_list.append(i)
print(third_list)