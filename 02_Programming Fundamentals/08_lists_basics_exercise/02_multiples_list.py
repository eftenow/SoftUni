factor = int(input())
count = int(input())
multiples = []

for number in range(1, count + 1):
    multiple = factor * number
    multiples.append(multiple)

print(multiples)
