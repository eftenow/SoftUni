width = int(input())
length = int(input())
height = int(input())

free_space = width * length * height
command = input()
total_taken_space = 0
not_enough_space = False

while command != "Done":
    box_size = int(command)
    total_taken_space += box_size
    if total_taken_space > free_space:
        not_enough_space = True
        break
    command = input()
diff = abs(free_space - total_taken_space)
if not_enough_space:
    print(f"No more free space! You need {diff} Cubic meters more.")
else:
    print(f"{diff} Cubic meters left.")
