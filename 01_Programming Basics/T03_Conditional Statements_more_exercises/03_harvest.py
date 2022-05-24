import math
meters = int(input())
grapes_per_meter = float(input())
wine_needed = int(input())
workers = int(input())

kg_grapes = meters * grapes_per_meter * 0.40
wine_liters_produced = kg_grapes / 2.5
wine_left = abs(wine_liters_produced - wine_needed)
wine_per_worker = wine_left / workers

if wine_liters_produced >= wine_needed:
    print(f"Good harvest this year! Total wine: {math.floor(wine_liters_produced)} liters. ")
    print(f"{math.ceil(wine_left)} liters left -> {math.ceil(wine_per_worker)} liters per person.")
else:
    print(f"It will be a tough winter! More {math.floor(wine_left)} liters wine needed.")
