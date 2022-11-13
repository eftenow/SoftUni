from collections import deque

seats = input().split(', ')
first_sequence = deque(int(x) for x in input().split(', '))
second_sequence = deque(int(x) for x in input().split(', '))
rotations_cunt = 0
seated_matches = []

while rotations_cunt < 10 and len(seated_matches) < 3:
    first_num = first_sequence.popleft()
    second_num = second_sequence.pop()
    letter = (chr(first_num + second_num))
    seat_one = str(first_num) + letter
    seat_two = str(second_num) + letter

    if seat_one in seats and seat_one not in seated_matches:
        seated_matches.append(seat_one)
    elif seat_two in seats and seat_two not in seated_matches:
        seated_matches.append(seat_two)
    else:
        first_sequence.append(first_num)
        second_sequence.appendleft(second_num)
    rotations_cunt += 1

print(f'Seat matches: {", ".join(seated_matches)}')
print(f'Rotations count: {rotations_cunt}')