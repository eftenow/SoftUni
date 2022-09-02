student_info = input()
results = {}  # username and points
submissions = {} # language and submissions

while student_info != "exam finished":
    student_info = student_info.split("-")
    username = student_info[0]
    if len(student_info) == 2:  # banned user
        results.pop(username)

    else:
        language = student_info[1]
        points = int(student_info[2])
        if username not in results:
            results[username] = points
        else:
            previous_points = int(results[username])
            if points > previous_points:
                results[username] = points
        if language not in submissions:
            submissions[language] = [points]
        else:
            submissions[language].append(points)
    student_info = input()

print("Results:")
for current_student, current_score in results.items():
    print(f"{current_student} | {current_score}")

print("Submissions:")
for technology, grades in submissions.items():
    amount_of_grades = len(grades)
    print(f"{technology} - {amount_of_grades}")
