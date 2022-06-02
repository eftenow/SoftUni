actor_name = input()
academy_points = float(input())
judges = int(input())
total_judge_points = 0
total_points = total_judge_points + academy_points

for judge in range(1, judges+1):
    name_of_judge = input()
    points_of_judge = float(input())
    name_length = len(name_of_judge)
    total_points += points_of_judge * name_length / 2
    if total_points > 1250.5:
        print(f"Congratulations, {actor_name} got a nominee for leading role with {total_points:.1f}!")
        break

diff = 1250.5 - total_points
if total_points < 1250.5:
    print(f"Sorry, {actor_name} you need {diff:.1f} more!")
