first = set(int(x) for x in input().split())
second = set(int(x) for x in input().split())

lines = int(input())

for _ in range(lines):
    command = input().split()
    action = command[0] + " " + command[1]
    if action == "Check Subset":
        if first.issubset(second) or second.issubset(first):
            print(True)
        else:
            print(False)
        continue

    numbers = [int(x) for x in command[2:]]
    while numbers:
        number = numbers.pop()
        if action == "Add First":
            first.add(number)
        elif action == "Add Second":
            second.add(number)
        elif action == "Remove First":
            if number in first:
                first.remove(number)
        elif action == "Remove Second":
            if number in second:
                second.remove(number)

print(', '.join(str(x) for x in sorted(first)))
print(', '.join(str(x) for x in sorted(second)))
