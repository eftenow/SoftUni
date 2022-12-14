def multiply(n):
    def decorator(function):
        def wrapper(num):
            result = function(num)
            return result * n
        return wrapper
    return decorator
