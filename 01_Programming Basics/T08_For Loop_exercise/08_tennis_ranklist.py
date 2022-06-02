import math

tournaments = int(input())
starting_points = int(input())
additional_points = 0
winner = 0
finalist = 0
semi_final = 0
for _ in range(tournaments):
    outcome = input()
    if outcome == "W":
        winner += 1
        additional_points += 2000
    elif outcome == "F":
        finalist += 1
        additional_points += 1200
    elif outcome == "SF":
        semi_final += 1
        additional_points += 720

total_points = starting_points + additional_points
average_points = additional_points / tournaments

print(f"Final points: {total_points}")
print(f"Average points: {math.floor(average_points)}")
print(f"{winner/tournaments*100:.2f}%")
