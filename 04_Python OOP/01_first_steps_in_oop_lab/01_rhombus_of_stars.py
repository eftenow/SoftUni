def print_line(n, row):
    spaces = (n - row - 1) * ' '
    stars = (row + 1) * '* '
    print(f'{spaces}{stars}'.rstrip())


def print_upper_part(n):
    for row in range(n):
        print_line(n, row)


def print_lower_part(n):
    for row in range(n - 2,  -1, -1):
        print_line(n, row)


def print_rhombus(n):
    print_upper_part(n)
    print_lower_part(n)


n = int(input())

print_rhombus(n)
