divisor = int(input())
boundary = int(input())
highest_number = 0

for number in range(1, boundary+1):
    if number % divisor == 0:
        if number > highest_number:
            highest_number = number

print(highest_number)
