pirating_duration_days = int(input())
daily_plunder = int(input())
expected_plunder = float(input())
day_count = 0
total_plunder = 0

for day in range(1, pirating_duration_days + 1):
    total_plunder += daily_plunder
    if day % 3 == 0:
        total_plunder += daily_plunder * 0.50
    if day % 5 == 0:
        total_plunder -= total_plunder * 0.30

if total_plunder >= expected_plunder:
    print(f"Ahoy! {total_plunder:.2f} plunder gained.")
else:
    percentage_collected = total_plunder / expected_plunder * 100
    print(f"Collected only {percentage_collected:.2f}% of the plunder.")
