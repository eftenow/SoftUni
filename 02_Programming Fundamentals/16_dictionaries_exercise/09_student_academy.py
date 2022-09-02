number_of_students = int(input())
academy = {}

for i in range(number_of_students):
    name = input()
    grade = float(input())
    if name not in academy:
        academy[name] = [grade]
    else:
        academy[name].append(grade)

for student, grades in academy.items():
    avg_grade = sum(grades) / len(grades)
    if avg_grade >= 4.5:
        print(f"{student} -> {avg_grade:.2f}")
