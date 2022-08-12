version = input().split(".")

first_digit = int(version[0])
second_digit = int(version[1])
third_digit = int(version[2]) + 1

if third_digit == 10:
    third_digit = 0
    second_digit += 1
    if second_digit == 10:
        second_digit = 0
        first_digit += 1
new_version = [first_digit, second_digit, third_digit]
new_version = list(map(str, new_version))
print(".".join(new_version))
