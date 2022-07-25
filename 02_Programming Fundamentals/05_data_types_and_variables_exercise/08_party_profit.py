members = int(input())
days = int(input())
coins = 0

for day in range(1, days + 1):
    if day % 10 == 0:
        members -= 2
    if day % 15 == 0:
        members += 5
    coins += 50
    coins -= members * 2
    if day % 3 == 0:
        coins -= members * 3
    if day % 5 == 0:
        coins += 20 * members
        if day % 3 == 0:
            coins -= members * 2

take_per_person = int(coins / members)
print(f"{members} companions received {take_per_person} coins each.")
