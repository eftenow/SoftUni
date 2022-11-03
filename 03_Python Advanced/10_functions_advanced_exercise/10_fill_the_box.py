def fill_the_box(*args):
    height, length, width = int(args[0]), int(args[1]), int(args[2])
    box_capacity = height * length * width
    cubes = 0
    no_space = False
    for amount in args[3:len(args) - 1]:
        if amount == 'Finish':
            break
        cubes += int(amount)
        if cubes > box_capacity:
            no_space = True
    if no_space:
        return f"No more free space! You have {cubes - box_capacity } more cubes."
    else:
        return f'There is free space in the box. You could put {box_capacity - cubes} more cubes.'


print(fill_the_box(10, 10, 10, 40, "Finish", 2, 15, 30))
