day = input()

price_12 = day == "Monday" or day == "Tuesday" or day == "Friday"
price_14 = day == "Wednesday" or day == "Thursday"
price_16 = day == "Saturday" or day == "Sunday"

if price_12:
    print("12")
elif price_14:
    print("14")
elif price_16:
    print("16")
