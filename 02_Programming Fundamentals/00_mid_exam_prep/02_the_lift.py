people_in_line = int(input())
wagons = list(map(int, input().split()))

for wagon_index in range(len(wagons)):
    while wagons[wagon_index] != 4:
        if people_in_line > 0:
            people_in_line -= 1
            wagons[wagon_index] += 1
        else:
            break

is_full = True
for wagon in wagons:
    if wagon < 4:
        is_full = False
        break

if people_in_line == 0 and not is_full:
    print("The lift has empty spots!")

elif people_in_line > 0 and is_full:
    print(f"There isn't enough space! {people_in_line} people in a queue!")
print(f"{' '.join(list(map(str, wagons)))}")
