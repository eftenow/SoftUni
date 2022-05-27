hour = int(input())
day = input()

work_days = day == "Monday" or day == "Tuesday" or day == "Wednesday" or day == "Thursday" \
    or day == "Friday" or day == "Saturday"
work_time = 10 <= hour <= 18

if work_days and work_time:
    print("open")
else:
    print("closed")
