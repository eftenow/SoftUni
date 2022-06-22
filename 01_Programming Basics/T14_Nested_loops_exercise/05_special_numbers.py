number = int(input())

for current_number in range(1111, 10000):
    is_special = True
    str_num = str(current_number)
    if "0" in str_num:
        continue
    for current_digit in str_num:
        if number % int(current_digit) != 0:
            is_special = False
            break
    if is_special:
        print(current_number, end=" ")
