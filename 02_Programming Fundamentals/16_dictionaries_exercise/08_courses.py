command = input()
courses = {}

while command != "end":
    course, name = command.split(" : ")
    if course not in courses:
        courses[course] = [name]
    else:
        courses[course].append(name)
    command = input()

for language, students in courses.items():
    print(f"{language}: {len(students)}")
    for student in students:
        print(f"-- {student}")
