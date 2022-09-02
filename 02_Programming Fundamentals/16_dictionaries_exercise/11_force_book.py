def set_side(to_side, to_user, both_sides):
    for key, values in both_sides.items():
        if to_user in values:
            return both_sides
    if to_side not in both_sides:
        both_sides[to_side] = [to_user]
    else:
        both_sides[to_side].append(to_user)
    return both_sides


def change_side(to_user, to_side, both_sides):
    for key, values in both_sides.items():
        if to_user in values:
            if to_side not in both_sides:
                both_sides[to_side] = [to_user]
            else:
                both_sides[to_side].append(to_user)
            both_sides[key].remove(to_user)
            return both_sides
    else:
        return set_side(to_side, to_user, both_sides)
