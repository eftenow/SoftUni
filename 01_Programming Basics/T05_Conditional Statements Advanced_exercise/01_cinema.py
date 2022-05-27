screening_type = input()
rows = int(input())
columns = int(input())
income = 0

seats = rows * columns

if screening_type == "Premiere":
    income = 12
elif screening_type == "Normal":
    income = 7.50
elif screening_type == "Discount":
    income = 5

total_income = income * seats


print(f"{total_income:.2f}")
