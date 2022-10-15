from collections import deque
def get_sec(time_str):
    h, m, s = time_str.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)


def format_seconds_to_hhmmss(seconds):
    hours = (seconds // (60*60)) % 24
    seconds %= (60*60)
    minutes = seconds // 60
    seconds %= 60
    return "%02i:%02i:%02i" % (hours, minutes, seconds)


robots = input().split(';')
starting_time = input()
seconds = get_sec(starting_time)
products = deque()

command = input()

while command != "End":
    products.append(command)
    command = input()

time_required = {}
free_robots = {}

for rob in robots:
    rob = rob.split('-')
    name, time = rob[0], int(rob[1])
    time_required[name] = time
    free_robots[name] = 0


while products:
    seconds += 1
    for rob, current_time in free_robots.items():
        if current_time <= seconds:
            free_robots[rob] = seconds + time_required[rob]
            print(f'{rob} - {products.popleft()} [{format_seconds_to_hhmmss(seconds)}]')
            break
    else:
        products.append(products.popleft())
