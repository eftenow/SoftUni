year = int(input())

while True:
    year += 1
    str_year = str(year)
    is_special = True
    for i in range(len(str_year)): # 2022 -> 2031
        if not is_special:
            break
        test_digit = str_year[i]
        for ind in range(i+1, len(str_year)):
            current_digit = str_year[ind]
            if test_digit == current_digit:
                is_special = False
                break
    if is_special:
        print(year)
        break
