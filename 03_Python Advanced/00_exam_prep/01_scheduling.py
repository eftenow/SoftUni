from collections import deque

jobs = deque(int(x) for x in input().split(', '))
ind = int(input())
total = sum([jobs[x] for x in range(len(jobs)) if jobs[x] <= jobs[ind]])
print(total)