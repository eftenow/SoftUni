number = int(input())
bonus_points = 0

if number <= 100:
    bonus_points += 5
elif 1000 > number > 100:
    bonus_points += 0.20 * number
else:
    bonus_points += 0.10 * number

if number % 2 == 0:
    bonus_points += 1
elif number % 10 == 5:
    bonus_points += 2
else:
    pass

print(bonus_points)
print(bonus_points+number)
