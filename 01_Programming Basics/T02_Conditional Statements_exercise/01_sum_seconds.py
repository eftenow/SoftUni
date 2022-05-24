time_first = int(input())
time_second = int(input())
time_third = int(input())

total_time = time_first+time_second+time_third
total_time_minutes = total_time//60
total_time_seconds = total_time%60

#if total_time_seconds<10:
 #   print(f"{total_time_minutes}:0{total_time_seconds}")
#else:
 #   print(f"{total_time_minutes}:{total_time_seconds}")

print(f"{total_time_minutes}:{total_time_seconds:02d}")
