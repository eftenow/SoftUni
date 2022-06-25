events = input().split("|")
energy, coins = 100, 100
bankrupt = False

for event_index in range(len(events)):
    current_event = events[event_index].split("-")
    action = current_event[0]
    energy_change = int(current_event[1])
    if action == "rest":
        if energy + energy_change > 100:
            energy_change = 100 - energy
            energy = 100
        else:
            energy += energy_change
        print(f"You gained {energy_change} energy.")
        print(f"Current energy: {energy}.")
    elif action == "order":
        if energy - 30 < 0:
            energy += 50
            print("You had to rest!")
        else:
            energy -= 30
            coins += energy_change
            print(f"You earned {energy_change} coins.")
    else:
        if energy_change > coins:
            print(f"Closed! Cannot afford {action}.")
            bankrupt = True
            break
        else:
            coins -= energy_change
            print(f"You bought {action}.")

if not bankrupt:
    print("Day completed!")
    print(f"Coins: {coins}")
    print(f"Energy: {energy}")
