def sorting_cheeses(**kwargs):
    cheeses = sorted(kwargs.items(), key=lambda kvpt: (-len(kvpt[1]), kvpt[0]))
    result = ''
    for cheese, quantity in cheeses:
        values = sorted(quantity, reverse=True)
        result += cheese + '\n'
        result += '\n'.join(str(x) for x in values) + '\n'
    return result
