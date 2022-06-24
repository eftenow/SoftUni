world_record = float(input())
distance_meters = float(input()) # 100
seconds_for_1_meter = float(input()) # 10

delay = (distance_meters // 50) * 30
new_time = distance_meters * seconds_for_1_meter + delay
diff = abs(new_time - world_record)

if new_time < world_record:
    print(f"Yes! The new record is {new_time:.2f} seconds.")
else:
    print(f"No! He was {diff:.2f} seconds slower.")
