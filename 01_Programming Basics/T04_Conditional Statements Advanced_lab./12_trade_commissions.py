import sys

town = input()
sales = float(input())
commission = 0
valid = True

if town == "Sofia":
    if 0 <= sales <= 500:
        commission = sales * 0.05
    elif 500 <= sales <= 1000:
        commission = sales * 0.07
    elif 1000 <= sales <= 10000:
        commission = sales * 0.08
    elif sales > 10000:
        commission = sales * 0.12
    else:
        valid = False

elif town == "Varna":
    if 0 <= sales <= 500:
        commission = sales * 0.045
    elif 500 <= sales <= 1000:
        commission = sales * 0.075
    elif 1000 <= sales <= 10000:
        commission = sales * 0.10
    elif sales > 10000:
        commission = sales * 0.13
    else:
        valid = False

elif town == "Plovdiv":
    if 0 <= sales <= 500:
        commission = sales * 0.055
    elif 500 <= sales <= 1000:
        commission = sales * 0.08
    elif 1000 <= sales <= 10000:
        commission = sales * 0.12
    elif sales > 10000:
        commission = sales * 0.145
    else:
        valid = False

else:
    valid = False

if valid is True:
    print(f"{commission:.2f}")
elif valid is False:
    print("error")
