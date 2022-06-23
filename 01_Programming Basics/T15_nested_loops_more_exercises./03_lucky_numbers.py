number = int(input())
is_happy = True

for current_number in range(1000, 9999+1):
    str_current = str(current_number)
    len_number = len(str_current) # 1000 > indexes = 0, 1, 2, 3
    first_sum = 0
    second_sum = 0
    if "0" in str_current:
        continue
    for index, digit in enumerate(str_current):
        if index == 0 or index == 1:
            first_sum += int(digit)
        elif index == 2 or index == 3:
            second_sum += int(digit)
    if first_sum == second_sum:
        if first_sum !=0:
            if number % first_sum == 0:
                print(current_number, end=' ')
