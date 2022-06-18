start = int(input())
finish = int(input())
magical_number = int(input())
combination_counter = 0
number_found = False
for number in range(start, finish + 1):
    for second_number in range(start, finish +1):
        combination_counter += 1
        sum_numbers = number + second_number
        if sum_numbers == magical_number:
            print(f"Combination N:{combination_counter} ({number} + {second_number} = {magical_number})")
            number_found = True
            break

    if number_found:
        break

if not number_found:
    print(f"{combination_counter} combinations - neither equals {magical_number}")
