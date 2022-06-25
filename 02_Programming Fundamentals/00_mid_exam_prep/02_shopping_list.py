shopping_list = input().split("!")
command = input()

while command != "Go Shopping!":
    command = command.split()
    action = command[0]
    item = command[1]
    if action == "Urgent":
        if item not in shopping_list:
            shopping_list.insert(0, item)
    elif action == "Unnecessary":
        if item in shopping_list:
            shopping_list.remove(item)
    elif action == "Correct":
        new_item = command[2]
        if item in shopping_list:
            index_old = shopping_list.index(item)
            shopping_list.remove(item)
            shopping_list.insert(index_old, new_item)
    elif action == "Rearrange":
        if item in shopping_list:
            shopping_list.remove(item)
            shopping_list.append(item)
    command = input()

print(", ".join(shopping_list))
