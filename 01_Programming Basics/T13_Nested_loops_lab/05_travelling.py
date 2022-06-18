destination = input()

while destination != "End":
    price = float(input())
    money_available = 0
    while price > money_available:
        earnings = float(input())
        money_available += earnings
    print(f"Going to {destination}!")
    destination = input()
