old_record = float(input())
distance_m = float(input())
time_per_meters = float(input())

delay = distance_m // 15 * 12.5
new_record = distance_m * time_per_meters + delay
diff = abs(new_record - old_record)

if new_record < old_record:
    print(f"Yes, he succeeded! The new world record is {new_record:.2f} seconds.")
else:
    print(f"No, he failed! He was {diff:.2f} seconds slower.")
