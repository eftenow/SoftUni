inventory_items = input().split(", ")
command = input().split(" - ")

while command[0] != "Craft!":
    action = command[0]
    item = command[1]
    if action == "Collect":
        if item not in inventory_items:
            inventory_items.append(item)
    elif action == "Drop":
        if item in inventory_items:
            inventory_items.remove(item)
    elif action == "Combine Items":
        current_item = item.split(":")
        old_item = current_item[0]
        new_item = current_item[1]
        if old_item in inventory_items:
            old_item_index = inventory_items.index(old_item)
            inventory_items.insert(old_item_index + 1, new_item)
    elif action == "Renew":
        if item in inventory_items:
            inventory_items.remove(item)
            inventory_items.append(item)
    command = input().split(" - ")
print(", ".join(inventory_items))
