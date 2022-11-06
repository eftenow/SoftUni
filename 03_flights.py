def flights(*args):
    planes_and_passengers = {}
    result = ''
    for i in range(0, len(args), 2):
        destination = args[i]
        if destination == 'Finish':
            break

        passengers = int(args[i + 1])

        if destination not in planes_and_passengers:
            planes_and_passengers[destination] = 0
        planes_and_passengers[destination] += passengers
    return planes_and_passengers

