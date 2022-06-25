number_of_rooms = int(input())
total_chairs = 0
total_visitors = 0

for room in range(1, number_of_rooms+1):
    chairs_and_visitors = input().split(" ")
    chairs = chairs_and_visitors[0]
    visitors = int(chairs_and_visitors[1])
    total_visitors += visitors
    total_chairs += len(chairs)
    if len(chairs) < visitors:
        print(f"{visitors - len(chairs)} more chairs needed in room {room}")


if total_chairs >= total_visitors:
    print(f"Game On, {total_chairs - total_visitors} free chairs left")

