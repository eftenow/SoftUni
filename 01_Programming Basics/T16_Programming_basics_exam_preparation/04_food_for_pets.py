days = int(input())
food_amount = float(input())
day_count = 0
biscuits = 0
cat_food_eaten = 0
dog_food_eaten = 0

for day in range(1, days + 1):
    dog_food = int(input())
    cat_food = int(input())
    day_count += 1
    if day_count % 3 == 0:
        biscuits += (cat_food + dog_food) * 0.10
    cat_food_eaten += cat_food
    dog_food_eaten += dog_food
total_food_eaten = dog_food_eaten + cat_food_eaten
total_food_eaten_percent = total_food_eaten / food_amount * 100
cat_food_percent = cat_food_eaten / total_food_eaten * 100
dog_food_percent = dog_food_eaten / total_food_eaten * 100
biscuits = int(biscuits)
print(f"Total eaten biscuits: {biscuits}gr.")
print(f"{total_food_eaten_percent:.2f}% of the food has been eaten.")
print(f"{dog_food_percent:.2f}% eaten from the dog.")
print(f"{cat_food_percent:.2f}% eaten from the cat.")
