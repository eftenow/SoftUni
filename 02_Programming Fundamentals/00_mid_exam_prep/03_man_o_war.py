ally_ship = list(map(int, input().split(">")))
enemy_ship = list(map(int, input().split(">")))

max_hp_capacity = int(input())
critical_health = max_hp_capacity * 0.20
command = input().split()
is_winner = False
is_loser = False

while command[0] != "Retire":
    action = command[0]
    if action == "Fire":
        index = int(command[1])
        damage = int(command[2])
        if index in range(len(enemy_ship)):
            enemy_ship[index] -= damage
            if enemy_ship[index] <= 0:
                is_winner = True
                break
    elif action == "Defend":
        start_index = int(command[1])
        end_index = int(command[2]) + 1
        damage = int(command[3])
        if start_index in range(len(ally_ship)) and end_index in range(len(ally_ship)+1):
            sections_under_attack = ally_ship[start_index:end_index]
            sections_after_the_attack = []
            for section in sections_under_attack:
                section -= damage
                sections_after_the_attack.append(section)
                if section <= 0:
                    is_loser = True
                    break
            ally_ship[start_index:end_index] = sections_after_the_attack
    elif action == "Repair":
        index = int(command[1])
        restore_health = int(command[2])
        if index in range(len(ally_ship)):
            section_to_repair = ally_ship[index]
            if section_to_repair + restore_health > max_hp_capacity:
                ally_ship[index] = max_hp_capacity
            else:
                ally_ship[index] += restore_health
    elif action == "Status":
        sections_for_repair = [x for x in ally_ship if x < critical_health]
        print(f"{len(sections_for_repair)} sections need repair.")
    command = input().split()

if is_winner:
    print("You won! The enemy ship has sunken.")
elif is_loser:
    print("You lost! The pirate ship has sunken.")
else:
    ally_ship_status = sum(ally_ship)
    enemy_ship_status = sum(enemy_ship)
    print(f"Pirate ship status: {ally_ship_status}")
    print(f"Warship status: {enemy_ship_status}")
