distances = list(map(int, input().split()))
removed_elements_value = 0

while len(distances) != 0:
    distance_index = int(input())
    remove_element = ""
    if distance_index < 0:
        remove_element = distances[0]
        distances.pop(0)
        last_element = distances[-1]
        distances.insert(0, last_element)
    elif distance_index > len(distances) - 1:
        first_element = distances[0]
        remove_element = distances[-1]
        distances.pop(-1)
        distances.append(first_element)
    else:
        remove_element = distances[distance_index]
        distances.pop(distance_index)
    for distance in range(len(distances)):
        if distances[distance] <= remove_element:
            distances[distance] += remove_element
        else:
            distances[distance] -= remove_element
    removed_elements_value += remove_element

print(removed_elements_value)