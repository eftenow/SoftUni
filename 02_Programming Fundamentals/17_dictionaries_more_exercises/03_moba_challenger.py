command = input()
players = {}

while command != "Season end":
    if " vs " in command:
        player_one, player_two = command.split(" vs ")
        if player_one in players and player_two in players:
            duel = False
            player_one_positions = players[player_one].keys()
            player_two_positions = players[player_two].keys()
            for pos in player_one_positions:
                if pos in player_two_positions:
                    duel = True
                    break
            if duel:
                player_one_points = sum(players[player_one].values())
                player_two_points = sum(players[player_two].values())
                if player_one_points > player_two_points:
                    players.pop(player_two)
                else:
                    players.pop(player_one)
    else:
        player, position, skill = command.split(" -> ")
        skill = int(skill)
        if player not in players:
            players[player] = {position:skill}
        else:
            if position not in players[player]:
                players[player][position] = skill
            else:
                prev_points = players[player][position]
                if skill > prev_points:
                    players[player][position] = skill
    command = input()
players_points = {}
for k, v in players.items():
    total_points = sum(players[k].values())
    players_points[k] = total_points
sorted_players = {k:v for k, v in sorted(players_points.items(), key=lambda x: (-x[1], x[0]))}


for each_player, score in sorted_players.items():
    print(f"{each_player}: {score} skill")
    sorted_scores = {k: v for k, v in sorted(players[each_player].items(), key=lambda x: -x[1])}
    for pos, curr_points in sorted_scores.items():
        print(f"- {pos} <::> {curr_points}")
