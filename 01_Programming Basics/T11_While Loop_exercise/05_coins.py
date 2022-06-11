money_in = float(input())
money_in = int(money_in*100)

coin_counter = 0

while money_in > 0:
    if money_in >= 200:
        money_in -= 200
        coin_counter += 1
    elif money_in >= 100:
        money_in -= 100
        coin_counter += 1
    elif money_in >= 50:
        money_in -= 50
        coin_counter += 1
    elif money_in >= 20:
        money_in -= 20
        coin_counter += 1
    elif money_in >= 10:
        money_in -= 10
        coin_counter += 1
    elif money_in >= 5:
        money_in -= 5
        coin_counter += 1
    elif money_in >= 5:
        money_in -= 5
        coin_counter += 1
    elif money_in >= 2:
        money_in -= 2
        coin_counter += 1
    elif money_in == 1:
        money_in -= 1
        coin_counter += 1

print(coin_counter)
