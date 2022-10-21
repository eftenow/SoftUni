from collections import deque
bees = deque(int(x) for x in input().split()) # first
nectar = [int(x) for x in input().split()] # last
symbols = deque(input().split())
honey_made = 0

calculations = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a / b
}
while bees and nectar:
    collected_nectar = nectar.pop()
    if collected_nectar >= bees[0]:
        bee = bees.popleft()
        symbol = symbols.popleft()
        if symbol == '/' and bee == 0:
            continue
        honey_made += abs(calculations[symbol](bee, collected_nectar))

print(f'Total honey made: {honey_made}')
if bees:
    print(f"Bees left: {', '.join(str(x) for x in bees)}")
if nectar:
    print(f"Nectar left: {', '.join(str(x) for x in nectar)}")
