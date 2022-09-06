strings = input().split()

for string in strings:
    repeated_string = string * len(string)
    print(repeated_string, end="")
