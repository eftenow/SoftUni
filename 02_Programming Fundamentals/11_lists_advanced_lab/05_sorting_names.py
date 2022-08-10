names = input().split(", ")

names = sorted(names, key=lambda name: (-len(name), name))
print(names)
