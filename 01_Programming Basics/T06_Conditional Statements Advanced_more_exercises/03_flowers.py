chrys_amount = int(input())
roses_amount = int(input())
tulip_amount = int(input())
season = input() #Spring, Summer, Аutumn, Winter
holiday = input()

chrys_price = 0
roses_price = 0
tulip_price = 0
if season == "Spring" or season == "Summer":
    chrys_price = 2
    roses_price = 4.10
    tulip_price = 2.50

elif season == "Autumn" or season == "Winter":
    chrys_price = 3.75
    roses_price = 4.50
    tulip_price = 4.15
total_price = chrys_price*chrys_amount + roses_price *roses_amount + tulip_price * tulip_amount
if holiday == "Y":
    total_price *= 1.15
elif holiday == "N":
    pass

if tulip_amount > 7 and season == "Spring":
    total_price *= 0.95
elif roses_amount >= 10 and season == "Winter":
    total_price *= 0.90

total_amount = roses_amount + tulip_amount + chrys_amount
if total_amount > 20:
    total_price *= 0.80

print(f"{total_price+2:.2f}")
