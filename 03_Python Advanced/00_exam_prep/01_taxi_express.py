from collections import deque

customers = deque(int(x) for x in input().split(', '))  # first
taxis = deque(int(x) for x in input().split(', '))

total_time = 0

while customers and taxis:
    customer = customers.popleft()
    taxi = taxis.pop()

    if taxi < customer:
        customers.appendleft(customer)
    else:
        total_time += min(customer, taxi)

if not customers:
    print(f'All customers were driven to their destinations')
    print(f'Total time: {total_time} minutes')

if customers and not taxis:
    print('Not all customers were driven to their destinations')
    print(f'Customers left: {", ".join(str(x) for x in customers)}')
