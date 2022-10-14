from collections import deque
parentheses = deque(input())
opening = '{[('
opened = []
closed_all = True

while parentheses:
    current_par = parentheses.popleft()
    if current_par in opening:
        opened.append(current_par)
    else:
        if len(opened) == 0 or (opened[-1] + current_par) not in '{}[]()' :
            closed_all = False
            break
        else:
            opened.pop()
        
if closed_all:
    print("YES")
else:
    print("NO")
