age = int(input())
laundry_price = float(input())
toy_price = int(input())
money = 0
money_lol= 0
toys = 0

for birthday in range(1, age+1):
    if birthday % 2 != 0:
        toys += 1
    elif birthday % 2 == 0:
        money += 10
        money_lol += money - 1

total_toys_price = toys * toy_price
total_money = money_lol + total_toys_price
diff = abs(total_money-laundry_price)

if total_money >= laundry_price:
    print(f"Yes! {diff:.2f} ")
else:
    print(f"No! {diff:.2f}")
