from collections import deque
expression = deque(input().split())
numbers = deque()  # 4 5 3
operators = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x // y,
}

while expression:
    char = expression.popleft()
    if char not in operators:
        numbers.append(int(char))
    else:
        while len(numbers) > 1:
            first = numbers.popleft()
            second = numbers.popleft()
            numbers.appendleft(operators[char](first, second))

print(*numbers)
