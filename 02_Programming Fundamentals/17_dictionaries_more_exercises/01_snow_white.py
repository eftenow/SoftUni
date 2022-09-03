contest_details = input()
given_contests = {}

while contest_details != "end of contests":
    contest_name, contest_password = contest_details.split(":")
    given_contests[contest_name] = contest_password
    contest_details = input()

command = input().split("=>")
contest_participants = {}

while len(command) > 1:
    contest, password, username, points = command
    points = int(points)
    if contest in given_contests and given_contests[contest] == password:
        if username not in contest_participants:
            contest_participants[username] = {contest: points}

        else:
            if contest in contest_participants[username]:
                last_score = contest_participants[username][contest]
                if points > last_score:
                    contest_participants[username][contest] = points
            else:
                contest_participants[username][contest] = points
    command = input().split("=>")

sorted_names = {k: v for k, v in sorted(contest_participants.items(), key=lambda item: item[0])}

best_user = ""
best_score = 0
for name, cont in contest_participants.items():
    current_user_score = 0
    current_user_name = 0
    for course_name, score in contest_participants[name].items():
        current_user_score += score
    if current_user_score > best_score:
        best_score = current_user_score
        best_user = name
print(f"Best candidate is {best_user} with total {best_score} points.")
print("Ranking:")

for name, cont in sorted_names.items():
    sorted_scores = {k: v for k, v in sorted(cont.items(), key=lambda item: -item[1])}
    print(name)
    for course, points_gained in sorted_scores.items():
        print(f"#  {course} -> {points_gained}")
