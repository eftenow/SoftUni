student_info = input()


all_courses = {}

while ":" in student_info:
    name, id, course = student_info.split(":")
    if course not in all_courses.keys():
        all_courses[course] = {}
    all_courses[course][id] = name

    student_info = input()

course_to_search = student_info

course_to_search = course_to_search.replace("_", " ")
if course_to_search in all_courses.keys():
    for student_id in all_courses[course_to_search]:
        student_name = all_courses[course_to_search][student_id]
        print(f"{student_name} - {student_id}")
