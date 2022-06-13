needed_money = int(input())
card_payments = 0
cash_payments = 0
sum_cash = 0
sum_card = 0
total_sum = 0
payments_counter = 0
#command = input()
not_enough_collected = False

while sum_card+sum_cash < needed_money:
    command = input()
    if command == "End":
        not_enough_collected = True
        break
    current_product = int(command)
    payments_counter += 1
    is_cash_payment = payments_counter % 2 == 1
    if is_cash_payment and current_product <= 100:
        sum_cash += current_product
        cash_payments += 1
    elif not is_cash_payment and current_product >= 10:
        sum_card += current_product
        card_payments += 1
    else:
        print("Error in transaction!")
        continue
    print("Product sold!")

if needed_money <= sum_cash + sum_card:
    average_card = sum_card / card_payments
    average_cash = sum_cash / cash_payments
    print(f"Average CS: {average_cash:.2f}")
    print(f"Average CC: {average_card:.2f}")


if not_enough_collected:
    print("Failed to collect required money for charity.")
