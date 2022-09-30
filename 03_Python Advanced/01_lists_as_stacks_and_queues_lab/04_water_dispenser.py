from collections import deque
water = int(input())
name = input()
names = deque()

while name != "Start":
    names.append(name)
    name = input()

command = input()

while command != "End":
    if command.isdigit():
        liters = int(command)
        if water >= liters:
            print(f"{names[0]} got water")
            water -= liters
            names.popleft()
        else:
            print(f"{names[0]} must wait")
            names.popleft()
    else:
        _, liters = command.split()
        water += int(liters)
    command = input()

print(f"{water} liters left")
