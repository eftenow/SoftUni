def logged(function):
    def wrapper(*args):
        res = function(*args)
        result = f'you called {function.__name__}{args}\nit returned {res}'
        return result
    return wrapper

@logged
def func(*args):
    return 3 + len(args)
