happiness = input().split(" ")
factor = int(input())
happiness = list(map(int, happiness))

happiness = list(map(lambda x: x*factor, happiness))
avg_happiness = sum(happiness) / len(happiness)
happy_employees = list(filter(lambda x: x >= avg_happiness, happiness))

if len(happy_employees) >= len(happiness) / 2:
    print(f"Score: {len(happy_employees)}/{len(happiness)}. Employees are happy!")
else:
    print(f"Score: {len(happy_employees)}/{len(happiness)}. Employees are not happy!")