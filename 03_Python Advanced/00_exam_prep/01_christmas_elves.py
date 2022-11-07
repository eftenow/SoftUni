from collections import deque

elves = deque(int(x) for x in input().split())
boxes = deque(int(x) for x in input().split())
toys_made = 0
energy_used = 0
attempts_count = 0

while boxes and elves:
    energy = elves.popleft()
    box = boxes.pop()

    if energy < 5:
        boxes.append(box)
        continue

    attempts_count += 1

    if attempts_count % 3 == 0:
        box = box * 2
        if energy < box:
            elves.append(energy * 2)
            boxes.append(box // 2)
            continue

        energy -= box
        if attempts_count % 5 != 0:
            toys_made += 2
            elves.append(energy + 1)
        elif attempts_count % 5 == 0:
            elves.append(energy)

    elif attempts_count % 5 == 0 and energy >= box:
        elves.append(energy - box)

    elif energy >= box:
        elves.append(energy - box + 1)
        toys_made += 1

    elif energy < box:
        elves.append(energy * 2)
        boxes.append(box)
        continue
    energy_used += box


print(f"Toys: {toys_made}")
print(f"Energy: {energy_used}")
if elves:
    print(f'Elves left: {", ".join([str(x) for x in elves])}')
if boxes:
    print(f'Boxes left: {", ".join([str(x) for x in boxes])}')