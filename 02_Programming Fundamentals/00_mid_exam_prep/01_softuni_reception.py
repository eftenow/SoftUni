first_efficiency = int(input())
second_efficiency = int(input())
third_efficiency = int(input())
students = int(input())

solved_problems_per_hour = (first_efficiency + second_efficiency + third_efficiency)
hours_count = 0
while students != 0:
    if students >= solved_problems_per_hour:
        students -= solved_problems_per_hour
    else:
        students = 0
    hours_count += 1
    if hours_count % 4 == 0:
        hours_count += 1
print(f"Time needed: {hours_count}h.")


