n = int(input())
sum_1 = 0
sum_2 = 0

for i in range(0,n):
    gg = int(input())
    sum_1 += gg

for i in range(0,n):
    gg = int(input())
    sum_2 += gg

diff = abs(sum_1 - sum_2)

if sum_1 == sum_2:
    print(f"Yes, sum = {sum_1}")
elif sum_1 != sum_2:
    print(f"No, diff = {diff}")
