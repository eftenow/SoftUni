from collections import deque
cups = deque(int(x) for x in input().split()) # first
bottles = [int(x) for x in input().split()] # last
wasted_water = 0

while cups and bottles:
    bottle = bottles.pop()
    cups[0] -= bottle
    if cups[0] <= 0:
        wasted_water += abs(cups.popleft())

if not cups:
    print(f'Bottles: {" ".join(str(x) for x in bottles)}')
else:
    print(f'Cups: {" ".join(str(x) for x in cups)}')

print(f"Wasted litters of water: {wasted_water}")
