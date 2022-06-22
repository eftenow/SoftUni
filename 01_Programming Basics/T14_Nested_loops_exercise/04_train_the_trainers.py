jury_members = int(input())
presentation = input() #presentation
total_grades_sum = 0
project_count = 0
while presentation != "Finish":
    sum_of_grades = 0
    current_presentation_average = 0
    for member in range(1, jury_members+1):
        grade = float(input())
        sum_of_grades += grade
    project_count += 1
    current_presentation_average = sum_of_grades / jury_members
    print(f"{presentation} - {current_presentation_average:.2f}.")
    total_grades_sum += current_presentation_average
    presentation = input()

average_score_all_presentations = total_grades_sum / project_count
print(f"Student's final assessment is {average_score_all_presentations:.2f}.")
