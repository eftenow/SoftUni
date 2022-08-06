key = input()
command = input().split(">>>")

while command[0] != "Generate":
    action = command[0]
    if action == "Contains":
        substring = command[1]
        if substring in key:
            print(f"{key} contains {substring}")
        else:
            print("Substring not found!")
    elif action == "Flip":
        case = command[1]
        start = int(command[2])
        end = int(command[3])
        substring = key[start:end]
        if case == "Upper":
            key = key[:start] + substring.upper() + key[end:]
        elif case == "Lower":
            key = key[:start] + substring.lower() + key[end:]
        print(key)
    elif action == "Slice":
        start = int(command[1])
        end = int(command[2])
        key = key[:start] + key[end:]
        print(key)
    command = input().split(">>>")

print(f"Your activation key is: {key}")
