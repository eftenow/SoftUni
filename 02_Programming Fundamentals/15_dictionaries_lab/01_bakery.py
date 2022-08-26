elements = input().split()
bakery = {}

for el in range(0, len(elements), 2):
    food = elements[el]
    amount = int(elements[el+1])
    bakery[food] = amount

print(bakery)
