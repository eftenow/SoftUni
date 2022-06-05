time_period = int(input())

doctors = 7
patients_checked = 0
patients_unchecked = 0




amount_of_unchecked = 0
amount_of_checked = 0

for day in range(1, time_period+1):
    patients_for_the_day = int(input())
    if day % 3 == 0 and amount_of_unchecked > amount_of_checked:
        doctors += 1
    if patients_for_the_day > doctors:
        patients_unchecked += 1
        amount_of_unchecked += patients_for_the_day - doctors
        amount_of_checked += doctors
    elif patients_for_the_day <= doctors:
        patients_checked += 1
        amount_of_checked += patients_for_the_day


print(f"Treated patients: {amount_of_checked}.")
print(f"Untreated patients: {amount_of_unchecked}.")
