def age_assignment(*args, **kwargs):
    name_and_age = {}
    for name in args:
        for letter, age in kwargs.items():
            if name.startswith(letter):
                name_and_age[name] = age
                break
    name_and_age = sorted(name_and_age.items())
    result = []
    for kvpt in name_and_age:
        name, age = kvpt[0], int(kvpt[1])
        result.append(f"{name} is {age} years old.")
    return '\n'.join(result)


print(age_assignment("Amy", "Bill", "Willy", W=36, A=22, B=61))
