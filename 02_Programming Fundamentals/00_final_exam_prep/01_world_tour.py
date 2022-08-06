stops = input()
command = input().split(':')

while command[0] != "Travel":
    action = command[0]
    if action == "Add Stop":
        index = int(command[1])
        string = command[2]
        if index in range(len(stops)):
            stops = stops[:index] + string + stops[index:]
    elif action == "Remove Stop":
        start_index = int(command[1])
        end_index = int(command[2])
        if start_index in range(len(stops)) and end_index in range(len(stops)):
            stops = stops[:start_index] + stops[end_index + 1:]
    elif action == "Switch":
        old_str = command[1]
        new_str = command[2]
        if old_str in stops:
            stops = stops.replace(old_str, new_str)
    command = input().split(":")
    print(stops)

print(f"Ready for world tour! Planned stops: {stops}")
