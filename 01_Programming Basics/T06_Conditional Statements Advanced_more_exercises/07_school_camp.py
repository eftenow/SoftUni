season = input()
group_type = input()
students = int(input())
nights = int(input())

price = 0
sport = ""

if season == "Winter":
    if group_type == "girls" or group_type == "boys":
        price = 9.60
    elif group_type == "mixed":
        price = 10

if season == "Spring":
    if group_type == "girls" or group_type == "boys":
        price = 7.20
    elif group_type == "mixed":
        price = 9.50

if season == "Summer":
    if group_type == "girls" or group_type == "boys":
        price = 15
    elif group_type == "mixed":
        price = 20

total_price = price * nights * students
if students >= 50:
    total_price *= 0.50
elif 20 <= students < 50:
    total_price *= 0.85
elif 10 <= students < 20:
    total_price *= 0.95

if group_type == "girls":
    if season == "Winter":
        sport = "Gymnastics"
    elif season == "Spring":
        sport = "Athletics"
    elif season == "Summer":
        sport = "Volleyball"

elif group_type == "boys":
    if season == "Winter":
        sport = "Judo"
    elif season == "Spring":
        sport = "Tennis"
    elif season == "Summer":
        sport = "Football"
elif group_type == "mixed":
    if season == "Winter":
        sport = "Ski"
    elif season == "Spring":
        sport = "Cycling"
    elif season == "Summer":
        sport = "Swimming"

print(f"{sport} {total_price:.2f} lv.")
