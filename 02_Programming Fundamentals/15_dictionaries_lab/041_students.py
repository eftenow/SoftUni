student = input()
student_courses = {}

while ":" in student:
    student = student.split(":")
    name = student[0]
    id = int(student[1])
    course = student[2]
    if course not in student_courses:
        student_courses[course] = dict()

    student_courses[course][id] = name

    student = input()

students_in_course = []
course_needed = student.replace("_", " ")


for key, value in student_courses.items():
    if key == course_needed:
        for id, name in value.items():
            print(f"{name} - {id}")
