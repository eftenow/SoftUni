numbers_sequence = list(map(int, input().split()))
average_number = sum(numbers_sequence) // len(numbers_sequence)
numbers_sequence = [x for x in sorted(numbers_sequence, reverse=True) if x > average_number]

while len(numbers_sequence) > 5:
    numbers_sequence.pop()

if len(numbers_sequence) == 0:
    print("No")
else:
    print(' '.join(list(map(str, numbers_sequence))))