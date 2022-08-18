population = [int(num) for num in input().split(", ")]
wealth_level = int(input())

if sum(population) < len(population) * wealth_level:
    print('No equal distribution possible')
else:
    poorest = min(population)

    while poorest < wealth_level:
        poorest_index = population.index(poorest)
        richest = max(population)
        richest_index = population.index(richest)

        needed = wealth_level - poorest
        can_take = richest - wealth_level
        redistributed_wealth = min(needed, can_take)
        population[poorest_index] += redistributed_wealth
        population[richest_index] -= redistributed_wealth

        poorest = min(population)

    print(population)
