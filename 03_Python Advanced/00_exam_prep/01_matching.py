from collections import deque

males = [int(x) for x in input().split()]
females = deque(int(x) for x in input().split())

matches = 0

while females and males:
    girl = females.popleft()
    boy = males.pop()

    if girl <= 0:
        males.append(boy)
        continue
    if boy <= 0:
        females.appendleft(girl)
        continue
    if girl % 25 == 0:
        females.popleft()
        males.append(boy)
        continue
    if boy % 25 == 0:
        males.pop()
        females.appendleft(girl)
        continue

    if boy == girl:
        matches += 1
    else:
        males.append(boy - 2)

print(f'Matches: {matches}')

if males:
    print(f'Males left: {", ".join(str(x) for x in reversed(males))}')
else:
    print('Males left: none')

if females:
    print(f'Females left: {", ".join(str(x) for x in females)}')
else:
    print('Females left: none')

