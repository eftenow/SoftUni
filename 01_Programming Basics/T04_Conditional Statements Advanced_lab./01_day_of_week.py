day = input()

weekday = day == "1" or day == "2" or day == "3"\
    or day == "4" or day == "5" or day == "6" or day == "7"

if weekday:
        if day == "1":
            print("Monday")
        elif day == "2":
            print("Tuesday")
        elif day == "3":
            print("Wednesday")
        elif day == "4":
            print("Thursday")
        elif day == "5":
            print("Friday")
        elif day == "6":
            print("Saturday")
        elif day == "7":
            print("Sunday")
else:
    print("Error")
