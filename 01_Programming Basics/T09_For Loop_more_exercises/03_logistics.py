count_of_loads = int(input())

sum_of_tons = 0
bus_tons = 0
truck_tons = 0
train_tons = 0

for _ in range(0, count_of_loads):
    tons = int(input())
    sum_of_tons += tons
    if tons <= 3:
        bus_tons += tons
    elif tons <= 11:
        truck_tons += tons
    elif tons >= 12:
        train_tons += tons

total_price = bus_tons * 200 + truck_tons * 175 + train_tons * 120
average_price = total_price / sum_of_tons

print(f"{average_price:.2f}")
print(f"{bus_tons/sum_of_tons*100:.2f}%")
print(f"{truck_tons/sum_of_tons*100:.2f}%")
print(f"{train_tons/sum_of_tons*100:.2f}%")
