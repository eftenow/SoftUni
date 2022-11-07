from collections import deque
eggs = deque(int(x) for x in input().split(', '))  # first
papers = deque(int(x) for x in input().split(', '))  # last
boxes = 0

while eggs and papers:
    egg = eggs.popleft()
    paper = papers.pop()
    if egg <= 0:
        papers.append(paper)
    elif egg == 13:
        papers.append(papers.popleft())
        papers.appendleft(paper)
    elif egg + paper <= 50:
        boxes += 1

if boxes > 0:
    print(f'Great! You filled {boxes} boxes.')
else:
    print("Sorry! You couldn't fill any boxes!")

if eggs:
    print(f'Eggs left: {", ".join(str(x) for x in eggs)}')
if papers:
    print(f'Pieces of paper left: {", ".join(str(x) for x in papers)}')