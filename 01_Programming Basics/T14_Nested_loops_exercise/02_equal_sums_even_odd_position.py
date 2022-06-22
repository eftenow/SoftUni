first_numb = int(input())
second_numb = int(input())

for number in range(first_numb, second_numb+1):
    str_number = str(number)
    odd_digits = 0
    even_digits = 0
    for index, digit in enumerate(str_number):
        if index % 2 == 0:
            odd_digits += int(digit)
        else:
            even_digits += int(digit)
    if odd_digits == even_digits:
        print(number, end =' ')
