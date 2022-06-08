data = input()
balance = 0

while data != "NoMoreMoney":
    money = float(data)

    if money < 0:
        print("Invalid operation!")
        break

    balance += money
    print(f"Increase: {money:.2f}")
    data = input()
print(f"Total: {balance:.2f}")
