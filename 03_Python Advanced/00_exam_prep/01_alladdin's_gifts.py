from collections import deque

materials = deque(int(x) for x in input().split())  # last
magic_levels = deque(int(x) for x in input().split())  # first
presents_crafted = False
gifts = {
    'Gemstone': 0,
    'Porcelain Sculpture': 0,
    'Gold': 0,
    'Diamond Jewellery': 0
}
while materials and magic_levels:
    material = materials.pop()
    magic = magic_levels.popleft()
    total = material + magic
    if total < 100:
        if total % 2 == 0:
            material = material * 2
            magic = magic * 3
        else:
            material = material * 2
            magic = magic * 2

    total = material + magic
    if total > 499:
        total = total // 2

    if 100 <= total <= 199:
        gifts['Gemstone'] += 1
    elif 200 <= total <= 299:
        gifts['Porcelain Sculpture'] += 1
    elif 300 <= total <= 399:
        gifts['Gold'] += 1
    elif 400 <= total <= 499:
        gifts['Diamond Jewellery'] += 1

    if gifts['Gemstone'] > 0 and gifts['Porcelain Sculpture'] > 0 or \
        gifts['Gold'] > 0 and gifts['Diamond Jewellery'] > 0:
        presents_crafted = True


if presents_crafted:
    print(f'The wedding presents are made!')
else:
    print('Aladdin does not have enough wedding presents.')

if materials:
    print(f'Materials left: {", ".join(str(x) for x in materials)}')
if magic_levels:
    print(f'Magic left: {", ".join(str(x) for x in magic_levels)}')

for gift, amount in sorted(gifts.items()):
    if amount:
        print(f'{gift}: {amount}')
