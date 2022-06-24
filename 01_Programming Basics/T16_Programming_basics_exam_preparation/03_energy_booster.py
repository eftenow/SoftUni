fruit = input() #Watermelon, Mango, Pineapple, Raspberry
set_size = input() # small, big
set_amount = int(input())
set_price = 0
if fruit == "Watermelon":
    if set_size == "small":
        set_price = 56 * 2
    elif set_size == "big":
        set_price = 28.70 * 5
elif fruit == "Mango":
    if set_size == "small":
        set_price = 36.66 * 2
    elif set_size == "big":
        set_price = 19.60 * 5
elif fruit == "Pineapple":
    if set_size == "small":
        set_price = 42.10 * 2
    elif set_size == "big":
        set_price = 24.80 * 5
elif fruit == "Raspberry":
    if set_size == "small":
        set_price = 20 * 2
    elif set_size == "big":
        set_price = 15.20 * 5

total_price = set_price * set_amount
if 400 <= total_price <= 1000:
    total_price *= 0.85
elif total_price > 1000:
    total_price *= 0.50

print(f'{total_price:.2f} lv.')
