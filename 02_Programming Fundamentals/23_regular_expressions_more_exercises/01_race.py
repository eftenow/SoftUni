import re
participants = input().split(", ")
participant_reg = r"[A-Za-z0-9]"
participant = input()
score_and_participant = {}
while participant != "end of race":
    score_reg = r"[0-9]"
    name_reg = r"[A-Za-z]"
    name = re.findall(name_reg, participant)
    score = re.findall(score_reg, participant)
    name = "".join(name)
    score = list(map(int, score))
    score = sum(score)
    if name in participants:
        if name not in score_and_participant:
            score_and_participant[name] = score
        else:
            score_and_participant[name] += score

    participant = input()

participants_sorted = {k: v for k, v in sorted(score_and_participant.items(), key=lambda x: -x[1])}
while len(participants_sorted) > 3:
    participants_sorted.popitem()

participants_sorted = list(participants_sorted)
for name in participants_sorted:
    participant_place = ''
    if participants_sorted.index(name) == 0:
        participant_place = "1st"
    elif participants_sorted.index(name) == 1:
        participant_place = "2nd"
    elif participants_sorted.index(name) == 2:
        participant_place = "3rd"
    print(f"{participant_place} place: {name}")
