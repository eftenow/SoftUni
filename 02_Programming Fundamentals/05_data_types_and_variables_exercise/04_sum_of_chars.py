num_lines = int(input())

sum = 0

for i in range(num_lines):
    char = str(input())
    sum += ord(char)

print(f"The sum equals: {sum}")
