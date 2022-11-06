from collections import deque

bomb_effects = deque(int(x) for x in input().split(', '))  # first
bomb_casings = deque(int(x) for x in input().split(', '))
collected_all = False
bombs = {
    40: ['Datura Bombs', 0],
    60: ['Cherry Bombs', 0],
    120: ['Smoke Decoy Bombs', 0]
}

while bomb_effects and bomb_casings:
    effect = bomb_effects.popleft()
    casing = bomb_casings.pop()
    bomb = effect + casing
    if bomb in bombs:
        bombs[bomb][1] += 1
        for b in bombs:
            if bombs[b][1] >= 3:
                collected_all = True
            else:
                collected_all = False
                break
    else:
        bomb_effects.appendleft(effect)
        bomb_casings.append(casing - 5)

    if collected_all:
        break

if collected_all:
    print("Bene! You have successfully filled the bomb pouch!")
else:
    print("You don't have enough materials to fill the bomb pouch.")

if not bomb_effects:
    print("Bomb Effects: empty")
else:
    print(f'Bomb Effects: {", ".join(str(x) for x in bomb_effects)}')

if not bomb_casings:
    print("Bomb Casings: empty")
else:
    print(f'Bomb Casings: {", ".join(str(x) for x in bomb_casings)}')

for _, bv in sorted(bombs.items(), key=lambda x: x[1]):
    current_bomb, value = bv
    print(f'{current_bomb}: {value}')
