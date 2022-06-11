poor_grades_allowed = int(input())
exercise = input()
sum_exercises = 0
sum_of_grades = 0
failed_exercises = 0
last_exercise = ""
failed = False

while exercise != "Enough":
    last_exercise = exercise
    exercise_grade = int(input())
    if exercise_grade <= 4:
        failed_exercises += 1
        if failed_exercises == poor_grades_allowed:
            failed = True
            break
    sum_exercises += 1
    sum_of_grades += exercise_grade
    exercise = input()

average_score = sum_of_grades / sum_exercises

if failed:
    print(f"You need a break, {failed_exercises} poor grades.")
else:
    print(f"Average score: {average_score:.2f}")
    print(f"Number of problems: {sum_exercises}")
    print(f"Last problem: {last_exercise}")
