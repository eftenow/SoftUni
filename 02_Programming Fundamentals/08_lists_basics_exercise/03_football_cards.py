red_cards = input().split()
team_a = ["A-" + str(number) for number in range(1, 12)]
team_b = ["B-" + str(number) for number in range(1, 12)]
end_game = False
for player in red_cards:
    team = player[0]
    if team == "A":
        if player in team_a:
            team_a.remove(player)
    elif team == "B":
        if player in team_b:
            team_b.remove(player)
    if len(team_a) < 7 or len(team_b) < 7:
        end_game = True
        break

print(f"Team A - {len(team_a)}; Team B - {len(team_b)}")
if end_game:
    print("Game was terminated")
