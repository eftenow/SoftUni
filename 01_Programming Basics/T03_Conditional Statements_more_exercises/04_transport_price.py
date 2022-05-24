km_traveled = float(input())
time_of_the_day = str(input())

taxi = 0.70

if time_of_the_day == "day":
    taxi += km_traveled*0.79
elif time_of_the_day == "night":
    taxi += km_traveled*0.90
taxi = '{:.2f}'.format(taxi)
bus = '{:.2f}'.format(0.09 * km_traveled)
train = '{:.2f}'.format(0.06 * km_traveled)

if km_traveled >= 100:
    print(train)
elif km_traveled >= 20:
    print(bus)
else:
    print(taxi)
