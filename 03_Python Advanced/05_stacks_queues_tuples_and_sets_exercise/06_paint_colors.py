from collections import deque
text = deque(input().split())

colors = ['red', 'yellow', 'blue', 'orange', 'purple', 'green']
secondary = ['orange', 'purple', 'green']
colors_found = []

while text:
    first = text.popleft()
    second = text.pop() if text else ""
    if first + second in colors:
        colors_found.append(first+second)
    elif second + first in colors:
        colors_found.append(second+first)
    else:
        mid_index = len(text) // 2
        first = first[:-1]
        second = second[:-1]
        if first:
            text.insert(mid_index, first)
        if second:
            text.insert(mid_index, second)

if 'orange' in colors_found:
    if not ('yellow' in colors_found and 'red' in colors_found):
        colors_found.remove("orange")   
elif 'purple' in colors_found:
    if not ('red' in colors_found and 'blue' in colors_found):
        colors_found.remove("purple")
elif 'green' in colors_found:
    if not ('yellow' in colors_found and 'blue' in colors_found):
        colors_found.remove("green")

print(colors_found)
