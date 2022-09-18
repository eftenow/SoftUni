text = input()
numbers_list = [int(n) for n in text if n.isdigit()]
non_numbers = [ch for ch in text if not ch.isdigit()]
take_list = [ch for i, ch in enumerate(numbers_list) if i % 2 == 0]
skip_list = [ch for i, ch in enumerate(numbers_list) if i % 2 != 0]
result = ""
skipped_string = ""

for i in range(1, len(take_list) + 1):
    first = take_list[i - 1]
    second = skip_list[i - 1]
    for n in range(first):
        if n >= len(non_numbers):
            break
        result += non_numbers[n]
    non_numbers = non_numbers[first:]
    for n in range(second):
        if n >= len(non_numbers):
            break
        skipped_string += non_numbers[n]
    non_numbers = non_numbers[second:]

print(result)
