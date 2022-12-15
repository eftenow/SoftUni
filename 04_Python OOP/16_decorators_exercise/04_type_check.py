def type_check(current_type):
    def decoorator(function):
        def wrapper(element):
            if type(element) != current_type:
                return 'Bad Type'
            return function(element)
        return wrapper
    return decoorator
