open_tabs = int(input())
salary = int(input())

for check in range(open_tabs):
    media = input()
    if media == "Facebook":
        salary -= 150
    elif media == "Instagram":
        salary -= 100
    elif media == "Reddit":
        salary -= 50
    if salary <= 0:
        print("You have lost your salary.")
        break

if salary > 0:
    print(salary)
