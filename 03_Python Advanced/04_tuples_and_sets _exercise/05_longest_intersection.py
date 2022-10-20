longest_intersection = set()

for _ in range(n):
    info = input().split('-')
    first_range = info[0].split(',')
    second_range = info[1].split(',')
    first_intersection = set()
    second_intersection = set()
    current_intersection_len = 0
    current_intersection = set()

    for num in range(int(first_range[0]), int(first_range[1]) + 1):
        first_intersection.add(num)
    for num in range(int(second_range[0]), int(second_range[1]) + 1):
        second_intersection.add(num)

    current_intersection_len = len(first_intersection.intersection(second_intersection))
    if current_intersection_len > longest_intersection_len:
        longest_intersection_len = current_intersection_len
        longest_intersection = first_intersection.intersection(second_intersection)

print(f'Longest intersection is [{", ".join([str(x) for x in longest_intersection])}] with length {longest_intersection_len}')
