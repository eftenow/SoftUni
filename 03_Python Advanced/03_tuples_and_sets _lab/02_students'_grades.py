n = int(input())
grades = {}

for _ in range(n):
    name, grade = input().split()
    grade = float(grade)
    if name not in grades:
        grades[name] = []
    grades[name].append(grade)

for name, grade in grades.items():
    avg = sum(grade) / len(grade)
    print(f"{name} -> {' '.join(f'{x:.2f}' for x in grade)} (avg: {avg:.2f})")
