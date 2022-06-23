start_of_interval = int(input())
end_of_interval = int(input())
magical_number = int(input())
combination_found = False
counter = 0

for first_number in range(start_of_interval, end_of_interval + 1):
    for second_number in range(start_of_interval, end_of_interval + 1):
        counter += 1
        if first_number + second_number == magical_number:
            print(f'Combination N:{counter} ({first_number} + {second_number} = {magical_number})')
            combination_found = True
            break
    if combination_found:
        break
if not combination_found:
    print(f'{counter} combinations - neither equals {magical_number}')
