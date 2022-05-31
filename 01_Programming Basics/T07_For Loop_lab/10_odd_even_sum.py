n = int(input())
odd_sum = 0
even_sum = 0


for i in range(1, n+1):
    gg = int(input())
    if i % 2 == 0:
        even_sum += gg
    elif i % 2 == 1:
        odd_sum += gg

diff = abs(odd_sum - even_sum)
if odd_sum == even_sum:
    print("Yes")
    print(f"Sum = {odd_sum}")
elif odd_sum != even_sum:
    print("No")
    print(f"Diff = {diff}")
