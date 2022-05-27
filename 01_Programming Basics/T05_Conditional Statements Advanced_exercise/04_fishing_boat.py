budget = int(input())
season = input()
fishermen = int(input())
price = 0
discount = 0

if season == "Spring":
    price = 3000
elif season == "Winter":
    price = 2600
elif season == "Summer" or season == "Autumn":
    price = 4200

if fishermen <= 6:
    price *= 0.90
elif 7 <= fishermen <= 11:
    price *= 0.85
elif fishermen >= 12:
    price *= 0.75

if fishermen % 2 == 0 and season != "Autumn":
    price *= 0.95

result = abs(budget - price)

if budget >= price:
    print(f"Yes! You have {result:.2f} leva left.")
else:
    print(f"Not enough money! You need {result:.2f} leva.")
