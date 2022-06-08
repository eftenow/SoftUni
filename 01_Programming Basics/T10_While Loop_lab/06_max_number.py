import sys

n = input()
biggest_number = -sys.maxsize
current_number = 0
while n != "Stop":
    number = int(n)
    if biggest_number < number:
        biggest_number = number

    n = input()

print(biggest_number)
