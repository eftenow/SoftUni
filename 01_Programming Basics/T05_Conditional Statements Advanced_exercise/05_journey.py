budget = float(input())
season = input()
expenses = 0
destination = ""
place = ""


if budget <= 100:
    destination = "Bulgaria"
    if season == "summer":
        expenses = budget * 0.30
    elif season == "winter":
        expenses = budget * 0.70

elif budget <= 1000:
    destination = "Balkans"
    if season == "summer":
        expenses = budget * 0.40
    elif season == "winter":
        expenses = budget * 0.80

elif budget > 1000:
    destination = "Europe"
    expenses = budget * 0.90

if season == "summer" and destination != "Europe":
    place = "Camp"

else:
    place = "Hotel"



print(f"Somewhere in {destination}")
print(f"{place} - {expenses:.2f}")
