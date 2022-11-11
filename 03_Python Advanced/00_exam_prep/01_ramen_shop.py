from collections import deque

ramen = deque(int(x) for x in input().split(', '))
people = deque(int(x) for x in input().split(', '))

while people and ramen:
    customer = people.popleft()
    bowl = ramen.pop()

    if bowl > customer:
        bowl -= customer
        ramen.append(bowl)
    elif customer > bowl:
        customer -= bowl
        people.appendleft(customer)

if not people:
    print(f'Great job! You served all the customers.')
    if ramen:
        print(f'Bowls of ramen left: {", ".join(str(x) for x in ramen)}')
else:
    print("Out of ramen! You didn't manage to serve all customers.")
    print(f'Customers left: {", ".join(str(x) for x in people)}')