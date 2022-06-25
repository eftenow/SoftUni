schedule = input().split(", ")
command = input().split(":")

while command[0] != "course start":
    action = command[0]
    lesson_title = command[1]
    lesson_exercise = lesson_title + "-Exercise"
    if action == "Add":
        if lesson_title not in schedule:
            schedule.append(lesson_title)
    elif action == "Insert":
        if lesson_title not in schedule:
            index = int(command[2])
            if index in range(len(schedule)):
                schedule.insert(index, lesson_title)
    elif action == "Remove":
        if lesson_title in schedule:
            schedule.remove(lesson_title)
        if lesson_exercise in schedule:
            schedule.remove(lesson_exercise)
    elif action == "Swap":
        second_lesson_title = command[2]
        if lesson_title in schedule and second_lesson_title in schedule:
            first_index = schedule.index(lesson_title)
            second_index = schedule.index(second_lesson_title)
            schedule[first_index], schedule[second_index] = second_lesson_title, lesson_title
            second_exercise = second_lesson_title + "-Exercise"
            if lesson_exercise in schedule:
                schedule.remove(lesson_exercise)
                schedule.insert(schedule.index(lesson_title) + 1, lesson_exercise)
            if second_exercise in schedule:
                schedule.remove(second_exercise)
                schedule.insert(schedule.index(second_lesson_title) + 1, second_exercise)
    elif action == "Exercise":
        if lesson_title in schedule and lesson_exercise not in schedule:
            schedule.insert(schedule.index(lesson_title) + 1, lesson_exercise)
        else:
            if lesson_exercise not in schedule:
                schedule.append(lesson_title)
                schedule.append(lesson_exercise)
    command = input().split(":")

for index_lesson in range(len(schedule)):
    current_lesson = schedule[index_lesson]
    place = index_lesson + 1
    print(f"{place}.{current_lesson}")
