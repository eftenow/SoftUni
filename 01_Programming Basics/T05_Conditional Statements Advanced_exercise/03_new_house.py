flower_kind = input()
flower_amount = int(input())
budget = int(input())
price = 0

if flower_kind == "Roses":
    price = 5
    if flower_amount > 80:
        price *= 0.90

elif flower_kind == "Dahlias":
    price = 3.80
    if flower_amount > 90:
        price *= 0.85

elif flower_kind == "Tulips":
    price = 2.80
    if flower_amount > 80:
        price *= 0.85

elif flower_kind == "Narcissus":
    price = 3
    if flower_amount < 120:
        price *= 1.15

elif flower_kind == "Gladiolus":
    price = 2.5
    if flower_amount < 80:
        price *= 1.20

total_cost = price * flower_amount
diff = abs(total_cost - budget)

if budget >= total_cost:
    print(f"Hey, you have a great garden with {flower_amount} {flower_kind} and {diff:.2f} leva left.")

else:
    print(f"Not enough money, you need {diff:.2f} leva more.")
