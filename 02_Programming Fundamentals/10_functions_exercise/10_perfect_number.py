import math


def perfect_number(number):
    divisors = []
    divisor = math.ceil(number / 2)
    while divisor != 1:
        divisors.append(divisor)
        divisor = math.ceil(divisor / 2)

    if sum(divisors) +1 == number:
        return "We have a perfect number!"
    else:
        return "It's not so perfect."


number = int(input())
print(perfect_number(number))
