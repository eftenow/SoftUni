material = input()
mine_resources = {}

while material != "stop":
    amount = int(input())
    if material not in mine_resources:
        mine_resources[material] = amount
    else:
        mine_resources[material] += amount
    material = input()


for key, value in mine_resources.items():
    print(f"{key} -> {value}")
