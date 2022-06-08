student_name = input()
fail_counter = 0
school_year = 1
student_excluded = False
sum_of_grades = 0

while school_year <= 12:
    if fail_counter > 1:
        student_excluded = True
        break

    mark = float(input())

    if mark < 4:
        fail_counter += 1
        continue
    sum_of_grades += mark
    school_year += 1

average_marks = sum_of_grades / 12
if student_excluded:
    print(f"{student_name} has been excluded at {school_year} grade")
else:
    print(f"{student_name} graduated. Average grade: {average_marks:.2f}")
