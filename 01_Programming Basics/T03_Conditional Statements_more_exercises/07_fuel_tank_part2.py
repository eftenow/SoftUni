import sys

fuel_type = str(input())
fuel_amount = float(input())
discount_card = str(input())

gasoline_price = 2.22
diesel_price = 2.33
gas_price = 0.93

if discount_card == "Yes":
    gasoline_price -= 0.18
    diesel_price -= 0.12
    gas_price -= 0.08

total_gasoline = gasoline_price*fuel_amount
total_diesel = diesel_price*fuel_amount
total_gas = gas_price * fuel_amount

if fuel_amount >= 20 and fuel_amount <= 25:
    total_gasoline = total_gasoline*0.92
    total_diesel = total_diesel*0.92
    total_gas = total_gas*0.92
elif fuel_amount > 25:
    total_gasoline = total_gasoline * 0.90
    total_diesel = total_diesel * 0.90
    total_gas = total_gas * 0.90

if fuel_type.casefold() == "gas":
    print(f"{total_gas:.2f} lv.")
elif fuel_type.casefold() == "gasoline":
    print(f"{total_gasoline:.2f} lv.")
elif fuel_type.casefold() == "diesel":
    print(f"{total_diesel:.2f} lv.")
else:
    sys.exit()
