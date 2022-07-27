number = int(input())
is_prime = None

for current_number in range(2, number):  # 7
    if number % current_number == 0:
        is_prime = False
        break
    else:
        is_prime = True

print(is_prime)
