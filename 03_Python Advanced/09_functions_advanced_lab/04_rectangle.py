def rectangle(length, width):
    result = ''

    if not isinstance(length, int) or not isinstance(width, int):
        print('Enter valid values!')
    else:
        def area(length, width):
            return length * width

        def perimeter(length, width):
            return (length + width) * 2

        result += f'Rectangle area: {area(length, width)}\n'
        result += f'Rectangle perimeter: {perimeter(length, width)}\n'
    return result
