from itertools import permutations


def possible_permutations(elements):
    for res in permutations(elements):
        yield list(res)
