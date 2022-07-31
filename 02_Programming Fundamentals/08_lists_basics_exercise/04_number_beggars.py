tips = list(map(int, input().split(", ")))
number_of_beggars = int(input())
money_collected = []

for beggar in range(number_of_beggars):
    total_earned = 0
    for tip_index in range(beggar, len(tips), number_of_beggars):
        total_earned += tips[tip_index]
    money_collected.append(total_earned)

print(money_collected)
