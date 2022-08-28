elements = input().lower().split()
elements_dict = {}

for el in elements:
    if el not in elements_dict:
        elements_dict[el] = 1

    else:
        elements_dict[el] += 1

for key, value in elements_dict.items():
    if value % 2 != 0:
        print(key, end=" ")
