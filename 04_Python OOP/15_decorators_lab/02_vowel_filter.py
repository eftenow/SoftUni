def vowel_filter(function):
    def wrapper():
        letters = function()
        return [x for x in letters if x in 'aoeiye']
    return wrapper

@vowel_filter
def get_letters():
    return ["a", "b", "c", "d", "e"]
