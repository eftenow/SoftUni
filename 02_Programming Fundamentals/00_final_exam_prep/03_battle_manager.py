commands = input()
heroes = {}
while commands != "Results":
    info = commands.split(":")
    cmd = info[0]
    if cmd == "Add":
        name = info[1]
        hp = int(info[2])
        energy = int(info[3])
        if name not in heroes.keys():
            heroes[name] = []
            heroes[name].append(hp)
            heroes[name].append(energy)
        elif name in heroes.keys():
            heroes[name][0] += hp
    if cmd == "Attack":
        attacker_name = info[1]
        defender_name = info[2]
        dmg = int(info[3])
        if attacker_name in heroes.keys() and defender_name in heroes.keys():
            heroes[defender_name][0] -= dmg
            heroes[attacker_name][1] -= 1
            if heroes[defender_name][0] <= 0:
                del heroes[defender_name]
                print(f"{defender_name} was disqualified!")
            if heroes[attacker_name][1] <= 0:
                del heroes[attacker_name]
                print(f"{attacker_name} was disqualified!")
    if cmd == "Delete":
        name = info[1]
        if name == "All":
            heroes.clear()
        else:
            del heroes[name]
 
    commands = input()
count = len(heroes)
print(f"People count: {count}")
for i in heroes:
    print(f"{i} - {heroes[i][0]} - {heroes[i][1]}")
