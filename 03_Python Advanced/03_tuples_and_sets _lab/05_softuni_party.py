n = int(input())
guests = set()

for _ in range(n):
    guest = input()
    guests.add(guest)

arrived_guest = input()

while arrived_guest != "END":
    guests.remove(arrived_guest)
    arrived_guest = input()

print(len(guests))
sorted_guests = sorted(guests)
print('\n'.join(sorted_guests))
