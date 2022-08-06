password = input()
command = input().split()

while command[0] != 'Done':
    action = command[0]
    if action == 'TakeOdd':
        new_password = ""
        for letter_index in range(len(password)):
            if letter_index % 2 != 0:
                new_password += password[letter_index]
        password = new_password
        print(''.join(password))
    elif action == "Cut":
        index = int(command[1])
        length = int(command[2])
        cut = password[index:index+length]
        password = password.replace(cut, "", 1)
        print(''.join(password))
    elif action == "Substitute":
        substring = command[1]
        substitute = command[2]
        if substring in password:
            password = password.replace(substring, substitute)
            print(''.join(password))
        else:
            print("Nothing to replace!")

    command = input().split()

print(f"Your password is: {password}")
