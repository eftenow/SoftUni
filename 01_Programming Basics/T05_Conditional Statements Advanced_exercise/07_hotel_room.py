month = input()
nights = int(input())
studio_price = 0
apartment_price = 0

if month == "May" or month == "October":
    studio_price = 50
    apartment_price = 65
    if nights > 14:
            studio_price *= 0.70
    elif nights > 7:
            studio_price *= 0.95

elif month == "June" or month == "September":
    studio_price = 75.20
    apartment_price = 68.70
    if nights > 14:
        studio_price *= 0.80

elif month == "July" or month == "August":
    studio_price = 76
    apartment_price = 77

if nights > 14:
    apartment_price *= 0.90



print(f"Apartment: {apartment_price*nights:.2f} lv.")
print(f"Studio: {studio_price*nights:.2f} lv.")
