n_lines = int(input())
plants = {}

for _ in range(n_lines):
    info = input().split("<->")
    plant, rarity = info
    plants[plant] = [int(rarity), 0, 0]

command = input().split(": ")

while command[0] != "Exhibition":
    action = command[0]
    tokens = command[1].split(" - ")
    plant = tokens[0]
    if plant not in plants:
        print("error")
    else:
        if action == "Rate":
            rating = int(tokens[1])
            plants[plant][1] += rating
            plants[plant][2] += 1
        elif action == "Update":
            new_rarity = int(tokens[1])
            plants[plant][0] = new_rarity
        elif action == "Reset":
            plants[plant][1] = 0
            plants[plant][2] = 0
    command = input().split(": ")

print("Plants for the exhibition:")
for current_plant in plants:
    rarity = plants[current_plant][0]
    ratings = plants[current_plant][1]
    number_of_ratings = plants[current_plant][2]
    avg_rating = 0
    if number_of_ratings > 0:
        avg_rating = ratings / number_of_ratings
    print(f"- {current_plant}; Rarity: {rarity}; Rating: {avg_rating:.2f}")
