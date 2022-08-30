product_info = input()
products_and_prices = {}

while product_info != "buy":
    product_info = product_info.split()
    product = product_info[0]
    price = float(product_info[1])
    quantity = int(product_info[2])

    if product not in products_and_prices:
        products_and_prices[product] = quantity, price

    else:
        products_and_prices[product] = products_and_prices[product][0] + quantity, price
    product_info = input()

for el in products_and_prices:
    product_price = products_and_prices[el][0] * products_and_prices[el][1]
    print(f"{el} -> {product_price:.2f}")
