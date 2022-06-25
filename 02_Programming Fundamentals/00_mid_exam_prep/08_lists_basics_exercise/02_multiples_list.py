factor = int(input())  # 2
count = int(input())  # 5
multiples_list = []

for number in range(factor, (count * factor)+1, factor):
    multiples_list.append(number)

print(multiples_list)
