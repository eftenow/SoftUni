import math
days = int(input())
food_kg = int(input())
dog_food_kg = float(input())
cat_food_kg = float(input())
turtle_food_grams = float(input())

food_needed = (turtle_food_grams/1000+cat_food_kg+dog_food_kg)*days
food_left = abs(food_needed-food_kg)

if food_kg >= food_needed:
    print(f"{math.floor(food_left)} kilos of food left.")
else:
    print(f"{math.ceil(food_left)} more kilos of food are needed.")
