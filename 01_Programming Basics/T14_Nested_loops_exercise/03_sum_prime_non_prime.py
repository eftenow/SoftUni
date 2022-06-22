command = input()
prime_numbers = 0
non_prime_numbers =0
while command != "stop":
    current_number = int(command)
    if current_number < 0:
        print("Number is negative.")
        command = input()
        continue
    non_prime = False
    for number in range (2 ,current_number):
        if current_number % number == 0:
            non_prime = True
    if non_prime:
        non_prime_numbers += current_number
    else:
        prime_numbers += current_number


    command = input()
print(f"Sum of all prime numbers is: {prime_numbers}")
print(f"Sum of all non prime numbers is: {non_prime_numbers}")
