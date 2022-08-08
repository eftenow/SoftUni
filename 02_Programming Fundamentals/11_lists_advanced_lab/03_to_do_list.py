command = input()
to_do_list = [""] * 11

while command != "End":
    command = command.split("-")
    importance = int(command[0])
    task = command[1]
    to_do_list[importance] = task
    command = input()

to_do_list = [element for element in to_do_list if element !=""]
print(to_do_list)
