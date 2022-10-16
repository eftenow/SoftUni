from collections import deque
green_light = int(input())
free_window = int(input())
cars_in_line = deque()
crash = False
command = input()
cars_passed = 0
while command != "END" and not crash:
    if command == "green":
        green = green_light
        while cars_in_line and green > 0:
            current_car = cars_in_line.popleft()
            car_len = len(current_car)
            green -= car_len
            if green >= 0 or green + free_window >= 0:
                cars_passed += 1
            else:
                print(f'A crash happened!')
                print(f'{current_car} was hit at {current_car[green + free_window]}.')
                crash = True
                break
    else:
        cars_in_line.append(command)

    command = input()

if not crash:
    print('Everyone is safe.')
    print(f"{cars_passed} total cars passed the crossroads.")
