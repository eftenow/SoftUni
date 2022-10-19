sets_length = [int(x) for x in input().split()]

first_set = set()
second_set = set()

for _ in range(sets_length[0]):
    first_set.add(input())

for _ in range(sets_length[1]):
    second_set.add(input())

elements_in_both = first_set.intersection(second_set)
print('\n'.join(elements_in_both))
