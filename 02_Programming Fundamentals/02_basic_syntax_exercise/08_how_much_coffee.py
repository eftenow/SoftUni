activity = input()

activity_list = ["coding", "dog", "cat", "movie"]
activity_list_upp = ["CODING", "DOG", "CAT", "MOVIE"]
coffee_count = 0
not_enough_sleep = False
while activity != "END":
    if coffee_count >= 5:
        not_enough_sleep = True
        break
    if activity in activity_list:
        coffee_count += 1
    elif activity in activity_list_upp:
        coffee_count += 2

    activity = input()

if not_enough_sleep:
    print("You need extra sleep")
else:
    print(coffee_count)
