email = input()
command = input()
while command != "Complete":
    info = command.split(" ")
    com = info[0]
    if com == "Make":
        size = info[1]
        if size == "Upper":
            email = email.upper()
            print(email)
        elif size == "Lower":
            email = email.lower()
            print(email)
    if com == "GetDomain":
        num = int(info[1])
        print(email[-num:])
    if com == "GetUsername":
        if "@" in email:
            index = int(email.index("@"))
            name = email[:index]
            print(name)
        else:
            print(f"The email {email} doesn't contain the @ symbol.")
    if com == "Replace":
        char = info[1]
        email = email.replace(char, "-")
        print(email)
    if com == "Encrypt":
        i = 0
        while i < len(email):
            print(str(ord(email[i])) + " ", end="")
            i += 1
    command = input()
