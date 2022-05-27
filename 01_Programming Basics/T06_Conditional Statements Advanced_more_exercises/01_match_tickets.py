budget = float(input())
category = input()
members = int(input())
transport_price = 0

price = 0

if category == "VIP":
    price = 499.99

elif category == "Normal":
    price = 249.99

if 1 <= members <= 4:
    transport_price = budget * 0.75
elif 5 <= members <= 9:
    transport_price = budget * 0.60
elif 10 <= members <= 24:
    transport_price = budget * 0.50
elif 25 <= members <= 49:
    transport_price = budget * 0.40
elif members > 50:
    transport_price = budget * 0.25

total_expenses = price * members + transport_price
diff = abs(total_expenses - budget)

if budget > total_expenses:
    print(f"Yes! You have {diff:.2f} leva left.")

elif budget < total_expenses:
    print(f"Not enough money! You need {diff:.2f} leva.")
