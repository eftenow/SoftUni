holiday_price = float(input())
amount_puzzles = int(input())
amount_dolls = int(input())
amount_teddy_bears = int(input())
amount_minions = int(input())
amount_trucks = int(input())

price_puzzle = 2.60
price_doll = 3
price_teddy_bear = 4.10
price_minion = 8.20
price_truck = 2

total_amount = amount_puzzles+amount_dolls+amount_teddy_bears+\
               amount_minions+amount_trucks

total_sales = price_puzzle * amount_puzzles + \
    price_doll * amount_dolls +\
    price_teddy_bear * amount_teddy_bears +\
    price_minion * amount_minions +\
    price_truck * amount_trucks

if total_amount >= 50:
    total_sales -= 0.25 * total_sales

rent = 0.10*total_sales
money_aquired = (total_sales - rent)
diff = abs(money_aquired-holiday_price)

if money_aquired >= holiday_price:
    print(f"Yes! {diff:.2f} lv left.")
else:
    print(f"Not enough money! {diff:.2f} lv needed.")
