numbers = list(map(int, input().split(" ")))
inverted_numbers = []

for number in numbers:
    inverted_number = -number
    inverted_numbers.append(inverted_number)

print(inverted_numbers)
