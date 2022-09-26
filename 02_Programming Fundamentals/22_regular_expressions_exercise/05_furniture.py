import re
items_to_buy = input()
items_reg = r"^>>(?P<item>[A-Za-z]+)<<(?P<price>\d+(\.\d+)?)!(?P<quantity>\d+)"
total_cost = 0
bought_items = []


while items_to_buy != "Purchase":
    valid_items = re.finditer(items_reg, items_to_buy)
    for current_item in valid_items:
        item = current_item["item"]
        price = current_item["price"]
        quantity = current_item["quantity"]
        total_cost += float(price) * int(quantity)
        bought_items.append(item)
    items_to_buy = input()

print("Bought furniture:")
for item in bought_items:
    print(item)
print(f"Total money spend: {total_cost:.2f}")
