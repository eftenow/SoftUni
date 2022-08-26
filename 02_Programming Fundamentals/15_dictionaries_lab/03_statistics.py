product_and_quantity = input()
bakery = {}
while ":" in product_and_quantity:
    product_and_quantity = product_and_quantity.split(": ")
    food = product_and_quantity[0]
    quantity = int(product_and_quantity[1])
    if food not in bakery.keys():
        bakery[food] = quantity
    else:
        bakery[food] += quantity

    product_and_quantity = input()
products = 0
total_quantities = 0
print("Products in stock:")
for product in bakery:
    amount = bakery[product]
    print(f"- {product}: {amount}")
    products += 1
    total_quantities += amount


print(f"Total Products: {products}")
print(f"Total Quantity: {total_quantities}")
