def grocery_store(**kwargs):
    groceries = sorted(kwargs.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))
    result = []
    for kvpt in groceries:
        item, value = kvpt[0], int(kvpt[1])
        result.append(f'{item}: {value}')
    return '\n'.join(result)


print(grocery_store(
    bread=5,
    pasta=12,
    eggs=12,
))



