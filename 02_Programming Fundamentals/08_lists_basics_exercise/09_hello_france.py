items_to_buy = input().split("|") # Clothes->43.30|Shoes->25.25
budget = float(input())
items_bought = []

total_spent = 0

for item_index in range(len(items_to_buy)):
    is_valid = False
    item_and_price = items_to_buy[item_index].split("->")
    item_type = item_and_price[0]
    item_price = float(item_and_price[1])
    if item_price > budget:
        continue

    if item_type == "Clothes":
        if item_price <= 50:
            is_valid = True
    elif item_type == "Shoes":
        if item_price <= 35:
            is_valid = True
    elif item_type == "Accessories":
        if item_price <= 20.50:
            is_valid = True

    if is_valid:
        budget -= item_price
        items_bought.append(item_price)
        total_spent += item_price

sold_items = []
total_earnings = 0

for sold_item in range(len(items_bought)):
    new_price = 1.40 * float(items_bought[sold_item])
    total_earnings += new_price
    str_price = str(f'{new_price:.2f}')
    sold_items.append(str_price)
profit = total_earnings - total_spent

print(" ".join(sold_items))
print(f"Profit: {profit:.2f}")
if total_earnings + budget >= 150:
    print("Hello, France!")
else:
    print("Not enough money.")
