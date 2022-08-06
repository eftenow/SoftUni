cars_to_obtain = int(input())
garage = {}

for _ in range(cars_to_obtain):
    car_info = input().split("|")
    model = car_info[0]
    mileage = int(car_info[1])
    fuel_available = int(car_info[2])
    garage[model] = [mileage, fuel_available]

command = input().split(" : ")

while command[0] != "Stop":
    action = command[0]
    car = command[1]
    if action == "Drive":
        distance = int(command[2])
        fuel = int(command[3])
        remaining_fuel = garage[car][1]
        if fuel > remaining_fuel:
            print("Not enough fuel to make that ride")
        else:
            garage[car][0] += distance
            garage[car][1] -= fuel
            print(f"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed.")
            if 100000 <= garage[car][0]:
                garage.pop(car)
                print(f"Time to sell the {car}!")
    elif action == "Refuel":
        fuel = int(command[2])
        remaining_fuel = garage[car][1]
        if remaining_fuel + fuel > 75:
            fuel = 75 - remaining_fuel
        garage[car][1] += fuel
        print(f"{car} refueled with {fuel} liters")
    elif action == "Revert": # 19 000 - 10 000
        kilometers = int(command[2])
        current_mileage = garage[car][0]
        if current_mileage - kilometers > 10000:
            print(f"{car} mileage decreased by {kilometers} kilometers")
            garage[car][0] -= kilometers
        else:
            garage[car][0] = 10000


    command = input().split(" : ")

for car in garage:
    final_mileage = garage[car][0]
    fuel_left = garage[car][1]
    print(f"{car} -> Mileage: {final_mileage} kms, Fuel in the tank: {fuel_left} lt.")
