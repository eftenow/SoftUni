def start_spring(**kwargs):
    type_and_object = {}
    result = ''
    for object, type in kwargs.items():
        if type not in type_and_object:
            type_and_object[type] = []
        type_and_object[type].append(object)

    for type, objects in sorted(type_and_object.items(), key=lambda x: (-len(x[1]), x[0])):
        result += f'{type}:\n'
        for object in sorted(objects):
            result += f'-{object}\n'

    return result


example_objects = {"Magnolia": "tree",
                   "Swallow": "bird",
                   "Thrushes": "bird",
                   "Pear": "tree",
                   "Cherries": "tree",
                   "Shrikes": "bird",
                   "Butterfly": "insect"}
print(start_spring(**example_objects))
