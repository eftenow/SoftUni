def func_executor(*args):
    result = ''
    for action, elements in args:
        func_ref = action(*elements)
        result += f'{action.__name__} - {func_ref}\n'


    return result
