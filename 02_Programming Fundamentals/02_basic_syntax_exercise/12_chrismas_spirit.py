quantity_allowed = int(input())
days_left = int(input())

ornament_set_price = 2
tree_skirt_price = 5
tree_garlands_price = 3
tree_lights_price = 15
count = 0
christmas_spirit = 0
total_spendings = 0

for day in range(1, days_left+1):

    count += 1
    if count % 11 == 0:
        quantity_allowed += 2

    if count % 2 == 0:
        total_spendings += quantity_allowed * ornament_set_price
        christmas_spirit += 5

    if count % 3 == 0:
        total_spendings += quantity_allowed * tree_skirt_price
        total_spendings += quantity_allowed * tree_garlands_price
        christmas_spirit += 13

    if count % 5 == 0:
        total_spendings += quantity_allowed * tree_lights_price
        christmas_spirit += 17
        if count % 3 == 0:
            christmas_spirit += 30

    if count % 10 == 0:
        christmas_spirit -= 20
        total_spendings += tree_skirt_price + tree_garlands_price + tree_lights_price
        if count == days_left:
            christmas_spirit -= 30



print(f"Total cost: {total_spendings}")
print(f"Total spirit: {christmas_spirit}")
