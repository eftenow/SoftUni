budget = float(input())
statists_amount = int(input())
statists_outfit_price = float(input())

decor = budget * 0.10
total_price_statists = statists_amount * statists_outfit_price

if statists_amount > 150:
    total_price_statists *= 0.9

total_expenses = decor + total_price_statists
diff = abs(budget - total_expenses)

if budget < total_expenses:
    print("Not enough money!")
    print(f"Wingard needs {diff:.2f} leva more.")

elif budget >= total_expenses:
    print("Action!")
    print(f"Wingard starts filming with {diff:.2f} leva left.")
