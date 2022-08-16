text = input()
command = input().split(" ")
 
while command[0] != "End":
    action = command[0]
    if action == 'Translate':
        target = command[1]
        replacement = command[2]
        text = text.replace(target, replacement)
        print(text)
    elif action == 'Includes':
        substring = command[1]
        if substring in text:
            print('True')
        else:
            print('False')
    elif action == "Start":
        substring = command[1]
        if text.startswith(substring):
            print('True')
        else:
            print('False')
    elif action == "Lowercase":
        text = text.lower()
        print(text)
    elif action == "FindIndex":
        char = command[1]
        print(text.rfind(char, ))
    elif action == "Remove":
        index = int(command[1])
        count = int(command[2])
        substring = text[index:index+count]
        text = text.replace(substring, "")
        print(text)
    command = input().split(" ")
