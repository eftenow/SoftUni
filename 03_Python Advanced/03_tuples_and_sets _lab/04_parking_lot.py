n = int(input())
parking = set()

for _ in range(n):
    action, number = input().split(", ")
    if action == "IN":
        parking.add(number)
    elif action == "OUT":
        if number in parking:
            parking.remove(number)

if len(parking) == 0:
    print("Parking Lot is Empty")
else:
    print('\n'.join(parking))
