number = int(input())


for num in range (1, number+1):
    is_special = False
    str_num = str(num)
    sum_of_digits = 0
    for current_digit in range(len(str_num)):
        digit_str = str_num[current_digit]
        digit = int(digit_str)
        sum_of_digits += digit
    if sum_of_digits == 5 or sum_of_digits == 7 or sum_of_digits == 11:
        is_special = True
    print(f'{num} -> {is_special}')
