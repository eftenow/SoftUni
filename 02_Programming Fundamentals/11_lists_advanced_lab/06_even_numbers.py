numbers = input().split(", ")

numbers = list(map(int, numbers))

even_or_not = map(lambda index: index if numbers[index] % 2 == 0 else "no", range(len(numbers)))

even_indices = list(filter(lambda a: a != "no", even_or_not))
print(even_indices)
