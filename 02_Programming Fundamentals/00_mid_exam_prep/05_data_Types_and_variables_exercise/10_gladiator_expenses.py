lost_fights = int(input())
helm_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())
total_expenses = 0
count = 0
for loss in range(1, lost_fights + 1):
    is_helm_broken = loss % 2 == 0
    is_sword_broken = loss % 3 == 0
    is_shield_broken = is_helm_broken and is_sword_broken

    if is_helm_broken:
        total_expenses += helm_price
    if is_sword_broken:
        total_expenses += sword_price
    if is_shield_broken:
        count += 1
        total_expenses += shield_price
        if count % 2 == 0:
            total_expenses += armor_price
print(f"Gladiator expenses: {total_expenses:.2f} aureus")


