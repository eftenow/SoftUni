def naughty_or_nice_list(*args, **kwargs):
    kids = {
        'Nice': list(),
        'Naughty': list(),
        'Not found': list()
    }
    result = ''
    list_of_names = args[0]
    args = args[1:]

    for arg in args:
        arg = arg.split('-')
        num, type = int(arg[0]), arg[1]
        count = []
        remove_kid = ''
        for info in list_of_names:
            if info[0] == num:
                count.append(info[1])
                remove_kid = info
        if len(count) == 1:
            kids[type].append(count[0])
            list_of_names.remove(remove_kid)
    for name in kwargs:
        type = kwargs[name]
        name_count = 0
        remove_name = ''
        for inf in list_of_names:
            if inf[1] == name:
                name_count += 1
                remove_name = inf
        if name_count == 1:
            list_of_names.remove(remove_name)
            kids[type].append(name)

    for _, name in list_of_names:
        kids['Not found'].append(name)

    for type, names in kids.items():
        if names:
            result += f'{type}: {", ".join(names)}\n'
    return result

