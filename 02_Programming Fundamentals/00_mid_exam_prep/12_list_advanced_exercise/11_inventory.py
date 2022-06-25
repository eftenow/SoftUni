inventory = input().split(", ")
command = input().split(" - ")

while command[0] != "Craft!":
    action = command[0]
    item = command[1]
    if action == "Collect":
        if item not in inventory:
            inventory.append(item)
    elif action == "Drop":
        if item in inventory:
            inventory.remove(item)
    elif action == "Combine Items":
        current_item = item.split(":")
        old_item = current_item[0]
        new_item = current_item[1]
        if old_item in inventory:
            item_index = inventory.index(old_item)
            inventory.insert(item_index+1, new_item)
    elif action == "Renew":
        if item in inventory:
            inventory.remove(item)
            inventory.append(item)
    command = input().split(" - ")
print(", ".join(inventory))

