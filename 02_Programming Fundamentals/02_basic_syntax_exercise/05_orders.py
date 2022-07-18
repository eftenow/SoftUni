number_of_orders = int(input())
total_price = 0
for order in range(1, number_of_orders+1):
    capsule_price = float(input())
    days = int(input())
    capsules_amount = int(input())
    if capsule_price < 0.01 or capsule_price > 100:
        continue
    elif days < 0 or days > 31:
        continue
    elif capsules_amount < 1 or capsules_amount > 2000:
        continue
    coffee_price = capsule_price * capsules_amount * days
    total_price += coffee_price
    print(f"The price for the coffee is: ${coffee_price:.2f}")

print(f"Total: ${total_price:.2f}")
