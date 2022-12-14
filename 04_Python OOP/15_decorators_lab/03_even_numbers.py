def even_numbers(function):
    def wrapper(numbers):
        return [x for x in numbers if x % 2 == 0]
    return wrapper

@even_numbers
def get_numbers(numbers):
    return numbers
