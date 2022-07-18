name = input()
voldemort = False
while name != "Welcome!":
    if name == "Voldemort":
        voldemort = True
        break
    elements = len(name)
    if elements < 5:
        print(f"{name} goes to Gryffindor.")
    elif elements == 5:
        print(f"{name} goes to Slytherin.")
    elif elements == 6:
        print(f"{name} goes to Ravenclaw.")
    elif elements > 6:
        print(f"{name} goes to Hufflepuff.")

    name = input()

if voldemort:
    print("You must not speak of that name!")
else:
    print("Welcome to Hogwarts.")
