def even_odd(*args):
    action = args[-1]
    numbers = args[:-1]
    result = ''
    if action == "odd":
        result = [x for x in numbers if x % 2 != 0]
    elif action == "even":
        result = [x for x in numbers if x % 2 == 0]
    return result


