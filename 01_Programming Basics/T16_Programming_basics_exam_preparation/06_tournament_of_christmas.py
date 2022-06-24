days = int(input())

total_games_won = 0
total_games = 0
total_earnings = 0
winning_days = 0

for day in range(1, days + 1):
    daily_earnings = 0
    games_for_the_day = 0
    wins_for_the_day = 0
    sport = input()
    while sport != "Finish":
        result = input()
        games_for_the_day += 1
        if result == "win":
            wins_for_the_day += 1
            daily_earnings += 20
        sport = input()
    total_games_won += wins_for_the_day
    total_games += games_for_the_day
    if wins_for_the_day > games_for_the_day / 2:
        daily_earnings *= 1.10
        winning_days += 1
    total_earnings += daily_earnings

if winning_days > days / 2:
    total_earnings *= 1.20
    print(f"You won the tournament! Total raised money: {total_earnings:.2f}")
else:
    print(f"You lost the tournament! Total raised money: {total_earnings:.2f}")
