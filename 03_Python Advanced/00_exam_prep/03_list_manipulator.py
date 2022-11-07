from collections import deque
def list_manipulator(numbers, operation, part, *args):
    numbers = deque(numbers)
    if operation == 'add' and part == 'beginning':
        for num in reversed(args):
            numbers.appendleft(num)

    elif operation == 'add' and part == 'end':
        for num in args:
            numbers.append(num)

    elif operation == 'remove' and part == 'beginning':
        elements_to_remove = ''.join(str(x) for x in args)
        numbers.popleft()
        if elements_to_remove:
            for _ in range(int(elements_to_remove) - 1):
                numbers.popleft()

    elif operation == 'remove' and part == 'end':
        elements_to_remove = ''.join(str(x) for x in args)
        numbers.pop()
        if elements_to_remove:
            for _ in range(int(elements_to_remove) - 1):
                numbers.pop()

    return list(numbers)

print(list_manipulator([1,2,3], "remove", "end"))
print(list_manipulator([1,2,3], "remove", "beginning"))
print(list_manipulator([1,2,3], "add", "beginning", 20))
print(list_manipulator([1,2,3], "add", "end", 30))
print(list_manipulator([1,2,3], "remove", "end", 2))
print(list_manipulator([1,2,3], "remove", "beginning", 2))
print(list_manipulator([1,2,3], "add", "beginning", 20, 30, 40))
print(list_manipulator([1,2,3], "add", "end", 30, 40, 50))
