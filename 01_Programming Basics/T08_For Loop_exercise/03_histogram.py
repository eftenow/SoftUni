n = int(input())

p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0

for number in range(n):
    current_number = int(input())
    if current_number < 200: #1
        p1 += 1
    elif current_number < 400: #2
        p2 += 1
    elif current_number < 600: #1
        p3 += 1
    elif current_number < 800: #1
        p4 += 1
    elif current_number >= 800: #2
        p5 += 1
total_sum = p1 + p2 + p3 + p4 + p5
print(f"{p1/total_sum*100:.2f}%")
print(f"{p2/total_sum*100:.2f}%")
print(f"{p3/total_sum*100:.2f}%")
print(f"{p4/total_sum*100:.2f}%")
