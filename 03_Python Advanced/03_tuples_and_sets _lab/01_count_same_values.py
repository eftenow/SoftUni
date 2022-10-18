numbers = tuple(float(x) for x in input().split())
occurrences = {}

for number in numbers:
    if number not in occurrences:
        occurrences[number] = 0
    occurrences[number] += 1

for occ in occurrences.items():
    print(f"{occ[0]} - {occ[1]} times")
