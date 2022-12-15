def tags(letter):
    def decorator(function):
        def wrapper(*args):
            text = function(*args)
            return f'<{letter}>{text}</{letter}>'
        return wrapper
    return decorator
