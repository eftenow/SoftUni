import sys

fruit = input()
day = input()
quantity = float(input())
week_day = day == "Monday" or day == "Tuesday" or day == "Wednesday" or day == "Thursday" or day == "Friday"
weekend = day == "Saturday" or day == "Sunday"
possible_fruits = fruit == "banana" or fruit == "apple" or fruit == "orange" or fruit == "grapefruit" \
                  or fruit == "kiwi" or fruit == "pineapple" or fruit == "grapes"
price = 0
invalid = False

if week_day and possible_fruits:
    if fruit == "banana":
        price = 2.50
    elif fruit == "apple":
        price = 1.20
    elif fruit == "orange":
        price = 0.85
    elif fruit == "grapefruit":
        price = 1.45
    elif fruit == "kiwi":
        price = 2.70
    elif fruit == "pineapple":
        price = 5.50
    elif fruit == "grapes":
        price = 3.85


elif weekend and possible_fruits:
    if fruit == "banana":
        price = 2.70
    elif fruit == "apple":
        price = 1.25
    elif fruit == "orange":
        price = 0.90
    elif fruit == "grapefruit":
        price = 1.60
    elif fruit == "kiwi":
        price = 3
    elif fruit == "pineapple":
        price = 5.60
    elif fruit == "grapes":
        price = 4.20


else:
    print("error")
    sys.exit()

total_price = price * quantity
print(f"{total_price:.2f}")
