def stock_availability(box, action, *args):
    if action == 'delivery':
        for cake in args:
            box.append(cake)

    elif action == 'sell':
        for cake in args:
            if type(cake) == int:
                for i in range(cake):
                    box.pop(0)
            else:
                box = list(filter(lambda a: a != cake, box))
        if not args:
            box = box[1:]
    return box

