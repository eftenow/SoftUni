upper_limit_hundreds = int(input())
upper_limit_tens = int(input())
upper_limit_singles = int(input())
for number in range(1, upper_limit_hundreds + 1):
    if number % 2 == 0:
        for second_number in range(2, upper_limit_tens + 1):
            if second_number == 2 or second_number == 3 or second_number == 5 or second_number == 7:
                for third_number in range(1, upper_limit_singles + 1):
                    if third_number % 2 == 0:
                        print(f'{number} {second_number} {third_number}')
