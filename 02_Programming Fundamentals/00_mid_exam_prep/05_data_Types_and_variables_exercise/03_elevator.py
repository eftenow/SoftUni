import math
people = int(input())
elevator_capacity = int(input())

total_courses = math.ceil(people / elevator_capacity)
print(total_courses)