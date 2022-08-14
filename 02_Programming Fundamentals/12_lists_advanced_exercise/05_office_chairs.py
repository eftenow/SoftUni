def office_chairs(rooms):
    chairs_left = 0
    for room in range(1, rooms+1):
        rooms_to_check = input().split()
        chairs = len(rooms_to_check[0])
        visitors = int(rooms_to_check[1])

        if visitors > chairs:
            diff = visitors - chairs
            chairs_left -= diff
            print(f"{diff} more chairs needed in room {room}")
        else:
            chairs_left += chairs - visitors
    if chairs_left >= 0:
        print(f"Game On, {chairs_left} free chairs left")


amount_of_rooms = int(input())
office_chairs(amount_of_rooms)
