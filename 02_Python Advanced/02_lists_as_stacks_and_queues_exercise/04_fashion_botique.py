boxes = [int(x) for x in input().split()]
rack_capacity = int(input())
current_rack = rack_capacity
racks = 1

while boxes:
    box = boxes.pop()
    if current_rack >= box:
        current_rack -= box
    else:
        racks += 1
        current_rack = rack_capacity
        boxes.append(box)

print(racks)
