target = 10000
total_steps = 0
action = input()
target_reached = False

while action != "Going home":
    steps = int(action)
    total_steps += steps
    if total_steps > target:
        target_reached = True
        break
    action = input()

else:
    way_home_steps = int(input())
    total_steps += way_home_steps
diff = abs(total_steps - target)
if total_steps > target:
    target_reached = True

if target_reached:
    print("Goal reached! Good job!")
    print(f"{diff} steps over the goal!")
else:
    print(f"{diff} more steps to reach goal.")
