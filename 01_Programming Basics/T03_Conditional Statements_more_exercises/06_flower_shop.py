import math
mag_amount = int(input())
zumb_amount = int(input())
rose_amount = int(input())
cactus_amount = int(input())
price_present = float(input())

mag_price = 3.25 * mag_amount
zumb_price = 4 * zumb_amount
rose_price = 3.50 * rose_amount
cactus_price = 8 * cactus_amount

total_sales = (mag_price + zumb_price + rose_price +cactus_price) * 0.95
diff = abs(price_present-total_sales)

if total_sales >= price_present:
    print(f"She is left with {math.floor(diff)} leva.")
else:
    print(f"She will have to borrow {math.ceil(diff)} leva. ")
