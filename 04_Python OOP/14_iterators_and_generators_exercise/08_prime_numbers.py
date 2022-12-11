def is_prime(num):
    if num <= 1:
        return False
    
    is_prime_number = True
    
    for i in range(2, num):
        if num % i == 0:
            is_prime_number = False
            break

    return is_prime_number


def get_primes(numbers):
    for number in numbers:
        if is_prime(number):
            yield number
