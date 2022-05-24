days_off = int(input())

days_working = 365 - days_off
norm_per_year = 30000

minutes_per_work_days = 63 * days_working
minutes_per_off_days = 127 * days_off

playtime_per_year = minutes_per_off_days + minutes_per_work_days
diff = abs(playtime_per_year - norm_per_year)
h = diff // 60
m = diff % 60


if norm_per_year <= playtime_per_year:
    print("Tom will run away")
    print(f"{h} hours and {m} minutes more for play")
else:
    print("Tom sleeps well")
    print(f"{h} hours and {m} minutes less for play")
