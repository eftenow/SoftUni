targets = list(map(int, input().split()))
command = input().split()

while command[0] != "End":
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
        upper_limit = index + radius
        lower_limit = index - radius
        if upper_limit in range(len(targets)) and lower_limit in range(len(targets)):
            del targets[lower_limit:upper_limit+1]
        else:
            print("Strike missed!")
    command = input().split()

targets = list(map(str, targets))
print("|".join(targets))