def odd_and_even_sum(number):
    even_sum = 0
    odd_sum = 0
    for digit in number:
        digit = int(digit)
        if digit % 2 == 0:
           even_sum += digit
        else:
            odd_sum += digit
    return f"Odd sum = {odd_sum}, Even sum = {even_sum}"


given_number = input()
print(odd_and_even_sum(given_number))
