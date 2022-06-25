array_values = list(map(int, input().split()))
command = input().split()

while command[0] != "end":
    operation = command[0]
    if operation == "decrease":
        array_values = [x-1 for x in array_values]
    else:
        first_index = int(command[1])
        second_index = int(command[2])
        first_digit = array_values[first_index]
        second_digit = array_values[second_index]
        if operation == "swap":
            array_values[first_index], array_values[second_index] = second_digit, first_digit
        elif operation == "multiply":
            result = first_digit * second_digit
            array_values[first_index] = result
    command = input().split()

array_values = list(map(str, array_values))
print(", ".join(array_values))
