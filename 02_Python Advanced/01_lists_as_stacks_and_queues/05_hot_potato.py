from collections import deque
names = deque(input().split())
n_toss = int(input())

while names:
    if len(names) == 1:
        print(f'Last is {names.pop()}')
    else:
        names.rotate(-n_toss)
        print(f"Removed {names.pop()}")
