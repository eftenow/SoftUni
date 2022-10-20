from collections import deque
chocolates = [int(x) for x in input().split(', ')] # last
milk_cups = deque(int(x) for x in input().split(', ')) # first

milkshakes = 0
enough_milkshakes = False

while chocolates and milk_cups:
    chocolate = chocolates[-1]
    milk = milk_cups[0]
    if chocolate == milk:
        chocolates.pop()
        milk_cups.popleft()
        milkshakes += 1
        if milkshakes == 5:
            enough_milkshakes = True
            break
    elif milk <= 0:
        milk_cups.popleft()
    elif chocolate <= 0:
        chocolates.pop()
    else:
        milk_cups.append(milk_cups.popleft())
        chocolates[-1] -= 5

if enough_milkshakes:
    print("Great! You made all the chocolate milkshakes needed!")
else:
    print("Not enough milkshakes.")

if chocolates:
    print(f'Chocolate: {", ".join(str(x) for x in chocolates)}')
else:
    print("Chocolate: empty")
if milk_cups:
    print(f'Milk: {", ".join(str(x) for x in milk_cups)}')
else:
    print(f'Milk: empty')
