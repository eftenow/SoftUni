n = int(input())
odd = set()
even = set()

for row in range(1, n + 1):
    name = input()
    name_sum = 0
    for letter in name:
        name_sum += ord(letter)
    name_sum //= row
    if name_sum % 2 == 0:
        even.add(name_sum)
    else:
        odd.add(name_sum)

if sum(odd) == sum(even):
    print(f'{", ".join(str(x) for x in odd.union(even))}')

elif sum(odd) > sum(even):
    print(f'{", ".join(str(x) for x in odd.difference(even))}')

else:
    print(f'{", ".join(str(x) for x in odd.symmetric_difference(even))}')
