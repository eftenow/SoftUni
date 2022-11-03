def even_odd_filter(**kwargs):
    filtered_elements = {}
    for kwarg in kwargs:
        elements = kwargs[kwarg]
        if kwarg == 'odd':
            filtered_elements[kwarg] = [x for x in elements if x % 2 != 0]
        elif kwarg == "even":
            filtered_elements[kwarg] = [x for x in elements if x % 2 == 0]

    sorted_elements = sorted(filtered_elements, key=lambda k:len(filtered_elements[k]), reverse=True)
    result = {}
    for el in sorted_elements:
        result[el] = filtered_elements[el]
    return result



