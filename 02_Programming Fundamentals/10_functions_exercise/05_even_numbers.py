numbers = input().split()
even_numbers = filter(lambda i: int(i)%2==0, numbers)
print(list(map(int, even_numbers)))
