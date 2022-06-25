neighborhood = input().split("@")
neighborhood = list(map(int, neighborhood))
command = input().split()
current_position = 0
is_successful = False
while command[0] != "Love!":
    jump_length = int(command[1])
    current_position += jump_length
    if current_position >= len(neighborhood):
        current_position = 0

    neighborhood[current_position] -= 2
    if neighborhood[current_position] <= 0:
        if neighborhood[current_position] < 0:
            print(f"Place {current_position} already had Valentine's day.")
        else:
            print(f"Place {current_position} has Valentine's day.")

    command = input().split()

neighborhood = list(filter(lambda x: x > 0, neighborhood))
if len(neighborhood) == 0:
    is_successful = True

print(f"Cupid's last position was {current_position}.")
if is_successful:
    print("Mission was successful.")
else:
    print(f"Cupid has failed {len(neighborhood)} places.")
