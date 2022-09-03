command = input()
dwarves = {}

while command != "Once upon a time":
    name, color, physics = command.split(" <:> ")
    physics = int(physics)
    id = name + ":" + color
    if id not in dwarves:
        dwarves[id] = [physics, color]
    else:
        prev_physics = dwarves[id][0]
        if physics > prev_physics:
            dwarves[id][0] = physics
    command = input()

hat_collection = []
for hat in dwarves:
    hat = hat.split(":")
    hat_collection.append(hat[1])

def count_color_occurrences(current_color):
    return hat_collection.count(current_color)

sorted_dwarfs = sorted(dwarves.items(), key=lambda x:(-x[1][0], -count_color_occurrences(x[1][1])))

for key, value in sorted_dwarfs:
    key = key.split(":")
    name = key[0]
    color = key[1]
    points = value[0]
    print(f"({color}) {name} <-> {points}")
