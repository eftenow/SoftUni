inheritance = float(input())
target_year = int(input())
living_cost = 0

for years in range(1800, target_year+1):
    if years % 2 == 0:
        living_cost += 12000
    elif years % 2 == 1:
        age = 18 + years % 1800
        living_cost += 12000 + 50 * age
diff = abs(inheritance - living_cost)

if inheritance >= living_cost:
    print(f"Yes! He will live a carefree life and will have {diff:.2f} dollars left.")
elif inheritance < living_cost:
    print(f"He will need {diff:.2f} dollars to survive.")
