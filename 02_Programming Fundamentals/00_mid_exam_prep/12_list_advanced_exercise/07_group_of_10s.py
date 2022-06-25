import math

numbers = input().split(", ")
numbers = list(map(int, numbers))

highest_number = max(numbers)
hn = math.ceil(highest_number / 10)

for iteration in range(1, hn + 1):
    filtered_numbers = [x for x in numbers if math.ceil(x / 10) == iteration]
    print(f"Group of {iteration}0's: {filtered_numbers}")
    filtered_numbers.clear()
