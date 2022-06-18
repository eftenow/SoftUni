number = int(input())
counter = 0
for n in range(number+1):
    for m in range(number+1):
        for b in range(number+1):
            total = n+m+b
            if total == number:
                counter += 1
print(counter)
