number_of_snowballs = int(input())
highest_quality_snowball = 0
best_weight = 0
best_time = 0
best_quality = 0
for snowball in range(1, number_of_snowballs + 1):
    weight_of_snowball = int(input())
    time_needed_to_reach = int(input())
    quality_of_snowball = int(input())
    current_snowball_quality = (weight_of_snowball / time_needed_to_reach) ** quality_of_snowball
    if current_snowball_quality > highest_quality_snowball:
        highest_quality_snowball = int(current_snowball_quality)
        best_time = time_needed_to_reach
        best_weight = weight_of_snowball
        best_quality = quality_of_snowball
print(f"{best_weight} : {best_time} = {highest_quality_snowball} ({best_quality})")