command = input()
companies = {}

while command != "End":
    company, employee = command.split(" -> ")
    if company not in companies:
        companies[company] = [employee]
    else:
        if employee not in companies[company]:
            companies[company].append(employee)
    command = input()

for key, values in companies.items():
    print(key)
    for value in values:
        print(f"-- {value}")
