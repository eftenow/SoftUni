targets = list(map(int, input().split()))
command = input()

while command != "End":
    command = command.split()
    action = command[0]
    index = int(command[1])

    if action == "Shoot":
        power = int(command[2])
        if index in range(len(targets)):
            if targets[index] - power > 0:
                targets[index] -= power
            else:
                targets.pop(index)
    elif action == "Add":
        value = int(command[2])
        if index in range(len(targets)):
            targets.insert(index, value)
        else:
            print("Invalid placement!")

    elif action == "Strike":
        radius = int(command[2])
        bottom_boundary = index - radius
        upper_boundary = radius + index
        if bottom_boundary in range(0, len(targets)) and upper_boundary in range(0, len(targets)):
            del targets[bottom_boundary:upper_boundary+1]
        else:
            print("Strike missed!")

    command = input()

targets = list(map(str, targets))
print("|".join(targets))