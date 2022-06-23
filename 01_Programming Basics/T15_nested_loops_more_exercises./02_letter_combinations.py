import string

start_of_interval = input()
end_of_interval = input()
exceptional_letter = input()
counter = 0


for letter in range(ord(start_of_interval), ord(end_of_interval)+1):
    if letter != ord(exceptional_letter):
        for letter_2 in range(ord(start_of_interval), ord(end_of_interval) + 1):
            if letter_2 != ord(exceptional_letter):
                for letter_3 in range(ord(start_of_interval), ord(end_of_interval) + 1):
                    if letter_3 != ord(exceptional_letter):
                        counter += 1
                        print(chr(letter)+chr(letter_2)+chr(letter_3), end=' ')

print(counter)
