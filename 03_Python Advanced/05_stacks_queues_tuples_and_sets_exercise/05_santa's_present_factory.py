from collections import deque

materials = [int(x) for x in input().split()]  # last
magic_level = deque(int(x) for x in input().split())  # first
crafted_all = False
presents = {
    150: ['Doll', 0],
    250: ['Wooden train', 0],
    300: ['Teddy bear', 0],
    400: ['Bicycle', 0]
}

while materials and magic_level:
    material = materials.pop()
    magic = magic_level.popleft()
    total = material * magic

    if total in presents:
        presents[total][1] += 1
    elif total < 0:
        materials.append(material + magic)
    elif total > 0:
        materials.append(material + 15)
    elif magic == 0 and material > 0:
        materials.append(material)
    elif material == 0 and magic > 0:
        magic_level.appendleft(magic)

if presents[150][1] >= 1 and presents[250][1] >= 1 or presents[300][1] >= 1 and presents[400][1]:
    print("The presents are crafted! Merry Christmas!")
else:
    print("No presents this Christmas!")

if materials:
    print(f'Materials left: {", ".join(str(x) for x in reversed(materials))}')
elif magic_level:
    print(f'Magic left: {", ".join(str(x) for x in magic_level)}')

for _, info in sorted(presents.items(), key=lambda x: x[1]):
    present, amount = info[0], info[1]
    if amount > 0:
        print(f'{present}: {amount}')
