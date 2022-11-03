def math_operations(*args, **kwargs):
    operations = {
        'a' : lambda a, b: (a + b),
        's' : lambda a, b: (a - b),
        'd' : lambda a, b: (a / b),
        'm' : lambda a, b: (a * b)
    }
    el_ind = -1
    for el in kwargs:
        el_ind += 1
        for num_ind in range(el_ind, len(args), 4):
            num = args[num_ind]
            if el == 'd' and num == 0:
                continue
            kwargs[el] = operations[el](kwargs[el], num)
    result = []
    elements = sorted(kwargs.items(), key=lambda x: (-x[1], x[0]))
    for k, v in elements:
        result.append(f'{k}: {v:.01f}')
    return '\n'.join(result)
