from collections import deque

orders = deque(int(x) for x in input().split(', '))  # first
employees = deque(int(x) for x in input().split(', '))
pizzas_made = 0

while orders and employees:
    order = orders.popleft()
    emp = employees.pop()
    if order > 10 or order <= 0:
        employees.append(emp)
        continue
    pizzas_made += min(emp, order)
    if order > emp:
        order -= emp
        orders.appendleft(order)

if not orders:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    print(f'Employees: {", ".join(str(x) for x in employees)}')
else:
    print("Not all orders are completed.")
    print(f'Orders left: {", ".join(str(x) for x in orders)}')
