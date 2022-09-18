x = [int(n) for n in input().split(', ')]
min_wealth = int(input())
bigger_than = [n for n in x if n > min_wealth]
less_than = [n for n in x if n < min_wealth]
bigger_diff = sum(bigger_than) - (len(bigger_than) * min_wealth)
lesser_diff = (len(less_than) * min_wealth) - sum(less_than)

if lesser_diff > bigger_diff:
    print('No equal distribution possible')
    
else:
    for n, num in enumerate(x):
        max_num = max(x)
        index_max_num = x.index(max_num)
        diff = max_num - (min_wealth - num)
        if num < min_wealth and diff >= (min_wealth - num):
            max_num -= (min_wealth - num)
            num += (min_wealth - num)
        elif num < min_wealth and diff < (min_wealth - num):
            max_num -= diff
            num += diff
        x[n] = num
        x[index_max_num] = max_num
        
    print(x)
