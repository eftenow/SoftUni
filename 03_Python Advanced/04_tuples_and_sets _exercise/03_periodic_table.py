elements = int(input())
unique_elements = set()

for _ in range(elements):
    elements_given = input().split()
    for el in elements_given:
        unique_elements.add(el)

print('\n'.join(unique_elements))
