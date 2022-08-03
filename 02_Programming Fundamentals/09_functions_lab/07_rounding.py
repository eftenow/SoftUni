def numbers_rounding(my_list):
    new_list = []
    for n in my_list:
        n = round(float(n))
        new_list.append(n)
    return new_list


numbers_list = input().split()
print(numbers_rounding(numbers_list))
