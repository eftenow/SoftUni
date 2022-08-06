concealed_message = input()
command = input().split(":|:")

while command[0] != "Reveal":
    action = command[0]
    is_invalid = False
    if action == 'InsertSpace':
        index = int(command[1])
        first_half = concealed_message[:index]
        second_half = concealed_message[index:]
        concealed_message = first_half + " " + second_half
    elif action == 'Reverse':
        substring = command[1]
        if substring in concealed_message:
            reversed_substring = substring[::-1]
            concealed_message = concealed_message.replace(substring, "", 1)
            concealed_message += reversed_substring
        else:
            is_invalid = True
    elif action == "ChangeAll":
        substring = command[1]
        replacement = command[2]
        if substring in concealed_message:
            concealed_message = concealed_message.replace(substring, replacement)
    if is_invalid:
        print("error")
    else:
        print(concealed_message)
    command = input().split(":|:")

print(f"You have a new text message: {concealed_message}")
