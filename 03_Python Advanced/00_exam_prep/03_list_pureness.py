from collections import deque

def best_list_pureness(*args):
    list_of_numbers = deque(args[0])
    rotations = int(args[1])
    best_rotation = 0
    best_pureness = 0
    for rotation in range(0, rotations + 1):
        pureness = sum([i * list_of_numbers[i] for i in range(len(list_of_numbers))])
        if pureness > best_pureness:
            best_pureness = pureness
            best_rotation = rotation
        list_of_numbers.appendleft(list_of_numbers.pop())
    return f'Best pureness {best_pureness} after {best_rotation} rotations'


test = ([1, 2, 3, 4, 5], 10)
result = best_list_pureness(*test)
print(result)
