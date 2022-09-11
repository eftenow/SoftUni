given_string = list(input())
strength = 0
result = []

for char_position in range(len(given_string)):
    current_char = given_string[char_position]
    if current_char == ">":
        strength += int(given_string[char_position+1])
        result.append(current_char)
    elif current_char != ">" and strength > 0:
        strength -= 1
    else:
        result.append(current_char)

print(''.join(result))
