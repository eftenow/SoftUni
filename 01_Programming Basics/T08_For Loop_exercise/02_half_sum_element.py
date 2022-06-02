import sys

numbers = int(input())

highest_number = -sys.maxsize
total_sum = 0
for number in range(numbers):
    current_number = int(input())
    total_sum += current_number
    if current_number > highest_number:
        highest_number = current_number


if highest_number == total_sum - highest_number:
    print("Yes")
    print(f"Sum = {highest_number}")
else:
    diff = abs(highest_number - (total_sum-highest_number))
    print("No")
    print(f"Diff = {diff}")
