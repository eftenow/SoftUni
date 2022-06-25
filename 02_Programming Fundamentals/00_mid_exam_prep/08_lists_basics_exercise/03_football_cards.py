cards = input()
cards_list = cards.split()
team_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
team_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
a_current_player = ""
b_current_player = ""

is_terminated = False
foul_counter_a = 0
foul_counter_b = 0

for i in range(len(cards_list)):
    if is_terminated:
        break
    current_card = cards_list[i]
    for player in range(1, 12):
        a_current_player = "A-"+str(player)
        b_current_player = "B-" + str(player)
        if a_current_player == current_card:
            if player in team_a:
                team_a.remove(player)

        if b_current_player == current_card:
            if player in team_b:
                team_b.remove(player)

        if len(team_a) < 7 or len(team_b) < 7:
            is_terminated = True
            break

a_players_left = len(team_a)
b_players_left = len(team_b)
print(f"Team A - {a_players_left}; Team B - {b_players_left}")

if is_terminated:
    print("Game was terminated")