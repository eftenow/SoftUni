import re
dates = input()

matching_dates = re.finditer(r"(?P<Day>\d{2})([./-])(?P<Month>[A-Z][a-z]{2})\2(?P<Year>\d{4})", dates)

for date in matching_dates:
    day = date["Day"]
    month = date["Month"]
    year = date["Year"]
    print(f"Day: {day}, Month: {month}, Year: {year}")
