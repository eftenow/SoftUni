exam_hour = int(input())
exam_minutes = int(input())
arrival_hour = int(input())
arrival_minutes = int(input())

arrival_total = arrival_hour * 60 + arrival_minutes
exam_total = exam_hour * 60 + exam_minutes
diff = abs (arrival_total-exam_total)
h = diff // 60
m = diff % 60

if exam_total >= arrival_total >= exam_total - 30:
    print("On time")

elif exam_total - 30 > arrival_total:
    print("Early")

elif exam_total < arrival_total:
    print("Late")

if exam_total > arrival_total > exam_total - 60:
    print(f"{diff} minutes before the start")
elif arrival_total <= exam_total - 60:
    print(f"{h}:{m:02d} hours before the start")
elif exam_total < arrival_total < exam_total + 60:
    print(f"{diff} minutes after the start")
elif exam_total + 60 <= arrival_total:
    print(f"{h}:{m:02d} hours after the start")
