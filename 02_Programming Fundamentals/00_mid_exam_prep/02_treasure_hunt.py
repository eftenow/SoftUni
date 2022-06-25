loot = input().split("|")
command = input().split()

while command[0] != "Yohoho!":
    action = command[0]
    if action == "Loot":
        for x in range(1, len(command)):
            item = command[1]
            if item not in loot:
                loot.insert(0, item)
                command.remove(item)
            else:
                command.remove(item)
    elif action == "Drop":
        current_index = int(command[1])
        if current_index in range(len(loot)):
            current_item = loot[current_index]
            loot.remove(current_item)
            loot.append(current_item)
    elif action == "Steal":
        number_of_stolen_goods = int(command[1])
        list_of_stolen_goods = []
        if number_of_stolen_goods in range(len(loot)):
            if number_of_stolen_goods > 0:
                list_of_stolen_goods = loot[-number_of_stolen_goods:]
                loot = loot[:-number_of_stolen_goods]

        else:
            list_of_stolen_goods = loot[0:]
            loot.clear()
        print(", ".join(list_of_stolen_goods))

    command = input().split()


if len(loot) > 0:
    total_treasure_gain = [len(x) for x in loot]
    total_treasure_gain = sum(total_treasure_gain)
    avg_gain = total_treasure_gain / len(loot)
    print(f"Average treasure gain: {avg_gain:.2f} pirate credits.")
else:
    print("Failed treasure hunt.")
