budget = float(input())
flour_price_per_kg = float(input())
 
eggs_price = flour_price_per_kg * 0.75
milk_price = (flour_price_per_kg * 1.25) / 4
 
bread = flour_price_per_kg + eggs_price + milk_price
bread_count = 0
eggs = 0
while budget > bread:
    budget -= bread
    bread_count += 1
    eggs += 3
    if bread_count % 3 == 0:
        eggs -= (bread_count - 2)
print(f"You made {bread_count} loaves of Easter bread! Now you have {eggs} eggs and {budget:.2f}BGN left.")
