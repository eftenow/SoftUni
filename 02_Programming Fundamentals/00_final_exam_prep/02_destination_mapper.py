import re

pattern = r"(=|\/)(?P<city>[A-Z][A-Za-z]{2,})\1"
places = input()
travel_points = 0
destinations = []

matches = re.finditer(pattern, places)
for match in matches:
    destination = match.group("city")
    points = len(destination)
    travel_points += points
    destinations.append(destination)

print(f"Destinations: {', '.join(destinations)}")
print(f"Travel Points: {travel_points}")
