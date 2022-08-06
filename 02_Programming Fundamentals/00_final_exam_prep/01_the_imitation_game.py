message = input()
command = input().split("|")

while command[0] != "Decode":
    action = command[0]
    if action == "Move":
        number_of_letters = int(command[1])
        substring = message[:number_of_letters]
        message = message.replace(substring, "")
        message = message + substring
    elif action == "Insert":
        index = int(command[1])
        value = command[2]
        message = message[:index] + value + message[index:]

    elif action == "ChangeAll":
        substring = command[1]
        replacement = command[2]
        if substring in message:
            message = message.replace(substring, replacement)

    command = input().split("|")

print(f"The decrypted message is: {message}")
