starting_energy = int(input())
games_count = 0
command = input()
out_of_energy = False
while command != "End of battle":
    energy_needed = int(command)
    if starting_energy >= energy_needed:
        starting_energy -= energy_needed
    else:
        out_of_energy = True
        break
    games_count += 1
    if games_count % 3 == 0:
        starting_energy += games_count

    command = input()

if out_of_energy:
    print(f"Not enough energy! Game ends with {games_count} won battles and {starting_energy} energy")
else:
    print(f"Won battles: {games_count}. Energy left: {starting_energy}")