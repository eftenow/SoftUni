elements = input().split()
command = input().split()
moves = 0
is_winner = False
while command[0] != "end":
    middle_of_sequence = len(elements) // 2
    first_index = int(command[0])
    second_index = int(command[1])

    moves += 1
    if 0 > first_index or first_index >= (len(elements)) \
            or 0 > second_index or second_index >= (len(elements)) or first_index == second_index:

        elements.insert(middle_of_sequence, f"-{moves}a")
        elements.insert(middle_of_sequence, f"-{moves}a")
        print("Invalid input! Adding additional elements to the board")
    else:
        first = elements[first_index]
        second = elements[second_index]
        if first == second:
            elements.remove(first)
            elements.remove(second)
            print(f"Congrats! You have found matching elements - {first}!")
            if len(elements) == 0:
                is_winner = True
                break
        else:
            print("Try again!")
    command = input().split()

if is_winner:
    print(f"You have won in {moves} turns!")
else:
    print(f"Sorry you lose :(")
    print(" ".join(list(map(str, elements))))
