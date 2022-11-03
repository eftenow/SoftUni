def concatenate(*args, **kwargs):
    text = ''.join(args)
    for current, substitute in kwargs.items():
        text = text.replace(current, substitute)
    return text
