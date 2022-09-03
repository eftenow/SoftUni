submission = input()
contest_results = {}
contests = {}

while submission != "no more time":
    username, contest, points = submission.split(" -> ")
    points = int(points)
    if username not in contest_results:
        contest_results[username] = {contest: points}
    else:
        if contest in contest_results[username]:
            previous_points = contest_results[username][contest]
            if points > previous_points:
                contest_results[username][contest] = points
        else:
            contest_results[username][contest] = points
    if contest not in contests:
        contests[contest] = {username: points}
    else:
        if username in contests[contest]:
            prev_points = contests[contest][username]
            if points > prev_points:
                contests[contest][username] = points
        else:
            contests[contest][username] = points
    submission = input()

for key, values in contests.items():
    sorted_values = {q: w for q, w in sorted(values.items(), key=lambda x: (-x[1], x[0]))}
    print(f"{key}: {len(values)} participants")
    participant_number = 1
    for name, points in sorted_values.items():
        print(f"{participant_number}. {name} <::> {points}")
        participant_number += 1

print("Individual standings:")
total_points_each_user = {}
user_number = 1
for k, v in contest_results.items():
    participant_points = 0
    for course_name, course_points in v.items():
        participant_points += course_points
    total_points_each_user[k] = participant_points
sorted_per_points = {q:w for q, w in sorted(total_points_each_user.items(), key=lambda x: (-x[1], x[0]))}
