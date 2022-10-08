from collections import deque
quantity = int(input())
orders = deque(int(x) for x in input().split())
serverd_all = True
print(max(orders))

while orders:
    current_order = orders.popleft()
    if quantity >= current_order:
        quantity -= current_order
    else:
        orders.appendleft(current_order)
        serverd_all = False
        break

if serverd_all:
    print('Orders complete')
else:
    print(f'Orders left: {" ".join(str(x) for x in orders)}')
