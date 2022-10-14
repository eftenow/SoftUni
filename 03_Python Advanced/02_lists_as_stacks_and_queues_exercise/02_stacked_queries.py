n = int(input())
my_stack = []

for _ in range(n):
    query = input()
    if '1' in query:
        _, number = query.split()
        my_stack.append(int(number))
    elif len(my_stack) > 0:
        if query == '2':
            my_stack.pop()
        elif query == '3':
            print(max(my_stack))
        elif query == '4':
            print(min(my_stack))

print(', '.join(str(x) for x in (reversed(my_stack))))
