width = int(input())
length = int(input())
cake = width*length
cake_pieces = 0
command = input()
done = False

while command != "STOP":

    pieces_taken = int(command)
    cake -= pieces_taken
    if cake <= 0:
        break
    command = input()
if cake < 0:
    print(f"No more cake left! You need {abs(cake)} pieces more.")
else:
    print(f"{cake} pieces are left.")
