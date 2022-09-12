text_lines = int(input())
names= {}
for line in range(text_lines):  # @ | for name # and * for age
    text = input().replace("|", "@").replace("#", "*")
    name_split = text.split("@")
    age_split = text.split("*")
    name = name_split[1]
    age = age_split[1]
    names[name] = age

for name, age in names.items():
    print(f"{name} is {age} years old.")
