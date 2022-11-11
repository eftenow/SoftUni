def shopping_list(budget, **kwargs):
    result = ''
    items_bought = 0
    if budget < 100:
        return 'You do not have enough budget.'
    for product in kwargs:
        money_needed = kwargs[product][1] * kwargs[product][0]
        if budget >= money_needed:
            budget -= money_needed
            result += f'You bought {product} for {money_needed:.2f} leva.\n'
            items_bought += 1
        if items_bought == 5:
            return result
    return result


