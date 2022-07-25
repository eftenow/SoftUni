number_of_lines = int(input())
capacity = 255
total_inflow = 0

for line in range(1, number_of_lines + 1):
    current_line_inflow = int(input())
    if total_inflow + current_line_inflow > capacity:
        print("Insufficient capacity!")
        continue
    total_inflow += current_line_inflow
print(total_inflow)
