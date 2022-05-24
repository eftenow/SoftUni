import sys
fuel_type = str(input())
fuel_liters_in_tank = float(input())

if fuel_type.casefold() == "gas" or fuel_type.casefold() == "diesel" or fuel_type.casefold() == "gasoline":
    pass
else:
    print("Invalid fuel!")
    sys.exit()
if fuel_liters_in_tank >= 25:
    print(f"You have enough {fuel_type.lower()}.")
else:
    print(f"Fill your tank with {fuel_type.lower()}!")
