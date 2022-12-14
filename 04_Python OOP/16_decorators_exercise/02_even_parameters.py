def even_parameters(function):
    def wrapper(*args):
        result = function
        if all([type(x) == int and x % 2 == 0 for x in args]):
            return result(*args)
        else:
            return 'Please use only even numbers!'
    return wrapper

