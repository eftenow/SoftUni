command = input().split("||")
cities = {}

while command[0] != "Sail":
    city, population, gold = command
    population, gold = int(population), int(gold)
    if city not in cities:
        cities[city] = [population, gold]
    else:
        cities[city][0] += population
        cities[city][1] += gold
    command = input().split("||")

event = input().split("=>")

while event[0] != "End":
    action, town = event[0], event[1]
    if action == "Plunder":
        people, gold = int(event[2]), int(event[3])
        cities[town][0] -= people
        cities[town][1] -= gold
        print(f"{town} plundered! {gold} gold stolen, {people} citizens killed.")
        if cities[town][0] <= 0 or cities[town][1] <= 0:
            print(f"{town} has been wiped off the map!")
            cities.pop(town)
    elif action == "Prosper":
        gold = int(event[2])
        if gold < 0:
            print("Gold added cannot be a negative number!")
        else:
            cities[town][1] += gold
            print(f"{gold} gold added to the city treasury. {town} now has {cities[town][1]} gold.")
    event = input().split("=>")

if len(cities) != 0:
    print(f"Ahoy, Captain! There are {len(cities)} wealthy settlements to go to:")
    for city in cities:
        population = cities[city][0]
        amount = cities[city][1]
        print(f"{city} -> Population: {population} citizens, Gold: {amount} kg")
else:
    print("Ahoy, Captain! All targets have been plundered and destroyed!")
