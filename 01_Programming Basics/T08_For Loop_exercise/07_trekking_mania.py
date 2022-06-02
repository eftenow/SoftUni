groups = int(input())

musala = 0
monblan = 0
kilimandzharo = 0
k2 = 0
everest = 0
total_people = 0


for n in range(groups):
    people_in_grp = int(input())
    total_people += people_in_grp

    if people_in_grp <= 5:
        musala += people_in_grp
    elif people_in_grp <= 12:
        monblan += people_in_grp
    elif people_in_grp <= 25:
        kilimandzharo += people_in_grp
    elif people_in_grp <= 40:
        k2 += people_in_grp
    elif people_in_grp >= 41:
        everest += people_in_grp

total_groups = musala+monblan+kilimandzharo+k2+everest

print(f"{musala/total_people*100:.2f}%")
print(f"{monblan/total_people*100:.2f}%")
print(f"{kilimandzharo/total_people*100:.2f}%")
print(f"{k2/total_people*100:.2f}%")
print(f"{everest/total_people*100:.2f}%")
