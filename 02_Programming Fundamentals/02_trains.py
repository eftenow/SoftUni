wagons = int(input())

train = [0 for x in range(wagons)]

command = input()

while command != "End":
    command = command.split(" ")
    action = command[0]
    if action == "add":
        people_add = int(command[1])
        train[-1] += people_add
    elif action == "insert":
        index = int(command[1])
        people = int(command[2])
        train[index] += people
    elif action == "leave":
        index = int(command[1])
        people = int(command[2])
        train[index] -= people

    command = input()

print(train)
