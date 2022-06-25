fires = input().split("#")
water = int(input())
total_fire_put_off = 0
total_effort = 0
fires_put_out = []

for fire_index in range(len(fires)):
    is_valid = False
    current_fire = fires[fire_index].split(" = ")
    fire_type = current_fire[0]
    fire_level = int(current_fire[1])
    if water >= fire_level:
        if 1 <= fire_level <= 50 and fire_type == "Low":
            is_valid = True
        elif 51 <= fire_level <= 80 and fire_type == "Medium":
            is_valid = True
        elif 81 <= fire_level <= 125 and fire_type == "High":
            is_valid = True

        if is_valid:
            total_effort += fire_level * 0.25
            water -= fire_level
            total_fire_put_off += fire_level
            fires_put_out.append(fire_level)

print("Cells:")
for fire in fires_put_out:
    print(f" - {fire}")

print(f"Effort: {total_effort:.2f}")
print(f"Total Fire: {total_fire_put_off}")