numbers = int(input())
even = []
odd = []
negative = []
positive = []
for i in range(numbers):
    number = int(input())
    if number % 2 == 0:
        even.append(number)
    else:
        odd.append(number)
    if number >= 0:
        positive.append(number)
    else:
        negative.append(number)

kind = input()
if kind == "even":
    print(even)
elif kind == "odd":
    print(odd)
elif kind == "positive":
    print(positive)
elif kind == "negative":
    print(negative)
