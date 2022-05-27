days = int(input())
room_type = input()
rating = input()

price = 0

if room_type == "room for one person":
    price = 18
elif room_type == "apartment":
    price = 25
    if days < 10:
        price *= 0.70
    elif 10 <= days <= 15:
        price *= 0.65
    elif days > 15:
        price *= 0.50

elif room_type == "president apartment":
    price = 35
    if days < 10:
        price *= 0.90
    elif 10 >= days <= 15:
        price *= 0.85
    elif days > 15:
        price *= 0.80

total_price = price * (days - 1)

if rating == "positive":
    total_price *= 1.25
elif rating == "negative":
    total_price *= 0.90

print(f"{total_price:.2f}")
