import re

text = input()
pattern = r"(#|\|)(?P<item>[A-Z][a-z]+( [A-Z]?[a-z]*)?)\1(?P<date>\d{2}\/\d{2}\/\d{2})\1(?P<calories>\d+)\1"
matches = re.finditer(pattern, text)
total_cals = 0
food_info = []
for match in matches:
    item = match["item"]
    date = match["date"]
    calories = int(match["calories"])
    total_cals += calories
    food_info.append(f"Item: {item}, Best before: {date}, Nutrition: {calories}")

days = total_cals // 2000
print(f"You have food to last you for: {days} days!")
for food in food_info:
    print(food)
