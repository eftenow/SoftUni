numbers = int(input())
field = []

for _ in range(numbers):
    field.append(input().split())

points = []
for i, row in enumerate(field):
    for j, col in enumerate(row):
        if col == ".":
            points.append([i, j])

if len(points) == 0:
    print(0)

elif len(points) == 1:
    print(1)

elif len(points) > 1:
    pile = []
    # create an empty "cluster" for each point
    for i in range(len(points)):
        pile.append([])

    for i in range(len(points)):
        curr = points[i]
        for p in points:
            if curr == p:  # same element
                continue
            if curr[0] == p[0] and (curr[1] == p[1] - 1 or curr[1] == p[1] + 1):
                pile[i].append(tuple(p))
            elif curr[1] == p[1] and (curr[0] == p[0] - 1 or curr[0] == p[0] + 1):
                pile[i].append(tuple(p))
        if len(pile[i]) > 0:
            pile[i].append(tuple(curr))

    pile = sorted([elements for elements in pile if len(elements) > 0])
    if len(pile) == 0 and len(points) > 0:
        print(1)
        exit()

    result = []
    while len(pile) > 0:
        first_element, *remaining_elements = pile
        first_element = set(first_element)
        temp_stack = []
        for r in remaining_elements:
            if first_element & set(r):
                first_element |= set(r)
            else:
                temp_stack.append(r)

        result.append(len(first_element))
        pile = temp_stack

    print(max(result))
