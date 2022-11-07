from collections import deque
fireworks = deque(int(x) for x in input().split(', '))
explosives = [int(x) for x in input().split(', ')]
crafted_fireworks = {
    'Palm Fireworks': 0,
    'Willow Fireworks': 0,
    'Crossette Fireworks': 0,
}
crafted_all = False

while fireworks and explosives:
    fw = fireworks.popleft()
    ex = explosives.pop()
    total = fw + ex
    if fw <= 0:
        explosives.append(ex)
        continue
    if ex <= 0:
        fireworks.appendleft(fw)
        continue

    if total % 3 == 0 and total % 5 != 0:
        crafted_fireworks['Palm Fireworks'] += 1
    elif total % 5 == 0 and total % 3 != 0:
        crafted_fireworks['Willow Fireworks'] += 1
    elif total % 3 == 0 and total % 5 == 0:
        crafted_fireworks['Crossette Fireworks'] += 1

    else:
        fireworks.append(fw - 1)
        explosives.append(ex)

    if crafted_fireworks['Palm Fireworks'] >= 3 and crafted_fireworks['Willow Fireworks'] >= 3\
        and crafted_fireworks['Crossette Fireworks'] >= 3:
        crafted_all = True
        break

if crafted_all:
    print("Congrats! You made the perfect firework show!")
else:
    print("Sorry. You can't make the perfect firework show.")

if fireworks:
    print(f"Firework Effects left: {', '.join(str(x) for x in fireworks)}")
if explosives:
    print(f"Explosive Power left: {', '.join(str(x) for x in explosives)}")

for firework, count in crafted_fireworks.items():
    print(f'{firework}: {count}')