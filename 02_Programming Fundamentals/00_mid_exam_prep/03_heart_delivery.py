neighborhood = list(map(int, input().split("@")))
command = input().split()
current_house = 0
while command[0] != "Love!":
    jump_length = int(command[1])
    current_house += jump_length
    if current_house >= len(neighborhood):
        current_house = 0
    neighborhood[current_house] -= 2
    house_visited = int(neighborhood[current_house])
    if house_visited == 0:
        print(f"Place {current_house} has Valentine's day.")
    elif house_visited < 0:
        print(f"Place {current_house} already had Valentine's day.")
    command = input().split()

failed_places = [x for x in neighborhood if x > 0]
failed_places = len(failed_places)

print(f"Cupid's last position was {current_house}.")
if failed_places == 0:
    print("Mission was successful.")
else:
    print(f"Cupid has failed {failed_places} places.")
