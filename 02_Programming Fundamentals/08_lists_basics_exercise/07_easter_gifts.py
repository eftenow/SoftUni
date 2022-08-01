gifts_list = input().split()
new_gifts_list = []
command = input()

while command != "No Money":
    command = command.split()
    temp_command_type = command[0]
    temp_gift = command[1]

    if temp_command_type == "OutOfStock":
        for i in range(len(gifts_list)):
            remove_gift = gifts_list[i]
            if remove_gift == temp_gift:
                gifts_list[i] = "None"

    elif temp_command_type == "Required":
        gift_index = int(command[2])
        if 0 < gift_index < len(gifts_list):
            gifts_list[gift_index] = temp_gift

    elif temp_command_type == "JustInCase":
        gifts_list[-1] = temp_gift
    command = input()

while "None" in gifts_list:
    gifts_list.remove("None")

print(' '.join(gifts_list))
