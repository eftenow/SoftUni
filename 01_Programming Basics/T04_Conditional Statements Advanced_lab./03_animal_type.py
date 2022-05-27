animal = input()

mammal = animal == "dog"
reptile = animal == "crocodile" or animal == "tortoise" or animal == "snake"

if mammal:
    print("mammal")
elif reptile:
    print("reptile")
else:
    print("unknown")
