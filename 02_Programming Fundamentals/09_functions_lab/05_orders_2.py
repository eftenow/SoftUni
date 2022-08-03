def orders_price(product, amount):
    if product == "coffee":
        return amount * 1.5
    elif product == "water":
        return amount * 1
    elif product == "coke":
        return amount * 1.4
    elif product == "snacks":
        return amount * 2


current_product = input()
current_amount = int(input())
result = orders_price(current_product, current_amount)

print(f"{result:.2f}")
