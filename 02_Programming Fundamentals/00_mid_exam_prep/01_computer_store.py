no_tax_price = input()
total_cost = 0
no_tax_cost = 0
while no_tax_price != "special" and no_tax_price != "regular":
    if float(no_tax_price) < 0:
        print("Invalid price!")
    else:
        price = float(no_tax_price) + float(no_tax_price) * 0.20
        total_cost += price
        no_tax_cost += float(no_tax_price)

    no_tax_price = input()

sum_of_taxes = total_cost - no_tax_cost
if no_tax_price == "special":
    total_cost = total_cost * 0.90

if total_cost == 0:
    print("Invalid order!")
else:
    print("Congratulations you've just bought a new computer!")
    print(f"Price without taxes: {no_tax_cost:.2f}$")
    print(f"Taxes: {sum_of_taxes:.2f}$")
    print("-----------")
    print(f"Total price: {total_cost:.2f}$")
