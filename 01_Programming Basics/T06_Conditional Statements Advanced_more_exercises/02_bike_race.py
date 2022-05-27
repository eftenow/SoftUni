juniors = int(input())
seniors = int(input())
race_type = input()

sum_people = juniors + seniors
price_juniors = 0
price_seniors = 0

if race_type == "trail":
    price_juniors = 5.50
    price_seniors = 7
elif race_type == "cross-country":
    price_juniors = 8
    price_seniors = 9.50
elif race_type == "downhill":
    price_juniors = 12.25
    price_seniors = 13.75
elif race_type == "road":
    price_juniors = 20
    price_seniors = 21.50

total_price = price_seniors * seniors + price_juniors * juniors

if race_type == "cross-country" and sum_people >= 50:
    total_price *= 0.75

final_price = total_price * 0.95

print(f"{final_price:.2f}")
