bottles = int(input())
ml_per_bottle = 750
total_detergent = ml_per_bottle * bottles
detergent_needed = 0
ml_for_plate = 5
ml_for_pot = 15
plates_counter = 0
pots_counter = 0
load_counter = 0
command = input()
not_enough = False

while command != "End":
    load = int(command)
    load_counter += 1
    if load_counter % 3 == 0:
        detergent_needed += load * ml_for_pot
        pots_counter += load
    else:
        detergent_needed += load * ml_for_plate
        plates_counter += load
    if detergent_needed > total_detergent:
        not_enough = True
        break

    command = input()

diff = abs(detergent_needed - total_detergent)
if not_enough:
    print(f"Not enough detergent, {diff} ml. more necessary! ")
else:
    print("Detergent was enough!")
    print(f"{plates_counter} dishes and {pots_counter} pots were washed.")
    print(f"Leftover detergent {diff} ml.")
