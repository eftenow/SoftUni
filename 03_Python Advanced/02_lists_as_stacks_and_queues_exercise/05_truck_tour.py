from collections import deque
n = int(input())
pumps = deque()

for _ in range(n):
    pumps.append([int(x) for x in input().split()])

for attempt in range(n):
    tank = 0
    full_circle = True
    for pump in range(n):
        gas, distance = pumps[pump]
        tank += gas
        tank -= distance
        if tank < 0:
            pumps.append(pumps.popleft())
            full_circle = False
            break
    if full_circle:
        print(attempt)
        break
