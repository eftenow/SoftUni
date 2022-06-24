food_bought_in_kg = int(input())
command = input()
food_bought_in_gr = food_bought_in_kg * 1000
total_food_eaten = 0
while command != "Adopted":
    daily_eaten_food = int(command)
    total_food_eaten += daily_eaten_food

    command = input()
diff = abs(total_food_eaten - food_bought_in_gr)
if food_bought_in_gr >= total_food_eaten:
    print(f"Food is enough! Leftovers: {diff} grams.")
else:
    print(f"Food is not enough. You need {diff} grams more.")
