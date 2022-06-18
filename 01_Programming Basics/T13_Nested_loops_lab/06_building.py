floors = int(input())
rooms_per_floor = int(input())
type_of_room = ""

for f in range(floors, 0, -1):
    if f == floors:
        type_of_room = "L"
    elif f % 2:
        type_of_room = "A"
    else:
        type_of_room = "O"
    for r in range(rooms_per_floor):
        print(f"{type_of_room}{f}{r}", end=" ")
    print("")
