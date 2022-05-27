day = input()

is_work_day = day == "Monday" or day == "Tuesday" or day == "Wednesday" or day == "Thursday" or day == "Friday"
is_off_day = day == "Saturday" or day == "Sunday"

if is_work_day:
    print("Working day")
elif is_off_day:
    print("Weekend")
else:
    print("Error")
