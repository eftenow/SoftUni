needed_money = float(input())
available_money = float(input())
total_money_acquired = 0
spend_tracker = 0
day_count = 0
spent_too_much = False


while needed_money > available_money:
    action = input()
    daily_amount = float(input())
    day_count += 1
    if action == "spend":
        available_money -= daily_amount
        if daily_amount > available_money:
            available_money = 0
        spend_tracker += 1
        if spend_tracker == 5:
            spent_too_much = True
            break
    elif action == "save":
        available_money += daily_amount
        spend_tracker = 0

if spent_too_much:
    print("You can't save the money.")
    print(day_count)
else:
    print(f"You saved the money for {day_count} days.")
