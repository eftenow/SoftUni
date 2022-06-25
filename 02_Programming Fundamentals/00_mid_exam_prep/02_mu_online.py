health = 100
bitcoins = 0

dungeon_rooms = input().split("|")
room_number = 0
is_over = False
for room in dungeon_rooms:
    room_number += 1
    current_room = room.split()
    command = current_room[0]

    if command == "potion":
        potion_health = int(current_room[1])
        if health + potion_health < 100:
            health += potion_health
        else:
            potion_health = 100 - health
            health += potion_health
        print(f"You healed for {potion_health} hp.")
        print(f"Current health: {health} hp.")

    elif command == "chest":
        chest_bitcoins = int(current_room[1])
        bitcoins += chest_bitcoins
        print(f"You found {chest_bitcoins} bitcoins.")

    else:
        health_lost = int(current_room[1])
        health -= health_lost
        if health > 0:
            print(f"You slayed {command}.")
        else:
            print(f"You died! Killed by {command}.")
            print(f"Best room: {room_number}")
            is_over = True
            break

if not is_over:
    print("You've made it!")
    print(f"Bitcoins: {bitcoins}")
    print(f"Health: {health}")


