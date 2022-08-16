tokens = input().split(": ")
zoo = {}
 
while tokens[0] != "EndDay":
    command = tokens[1]
    command = command.split("-")
    animal = command[0]
    if tokens[0] == "Add":
        food = int(command[1])
        area = command[2]
        if animal not in zoo:
            zoo[animal] = [food, area]
        else:
            zoo[animal][0] += food
    elif tokens[0] == "Feed":
        food = int(command[1])
        if animal in zoo:
            zoo[animal][0] -= food
            if zoo[animal][0] <= 0:
                zoo.pop(animal)
                print(f"{animal} was successfully fed")
    tokens = input().split(": ")
hungry_zones = {}
print("Animals:")
for animal in zoo:
    food = zoo[animal][0]
    zone = zoo[animal][1]
    print(f" {animal} -> {food}g")
    if zone not in hungry_zones:
        hungry_zones[zone] = [1]
    else:
        hungry_zones[zone][0] += 1
 
print("Areas with hungry animals:")
for zone in hungry_zones:
    print(f" {zone}: {hungry_zones[zone][0]}")
