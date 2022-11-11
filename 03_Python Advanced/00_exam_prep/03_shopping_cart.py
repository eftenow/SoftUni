def shopping_cart(*args):
    cart = {'Soup': set(), 'Pizza': set(), 'Dessert': set() }
    result = ''
    max_products = {'Soup': 3, 'Pizza': 4, 'Dessert': 2}
    no_products = True
    for meal_product in args:
        if meal_product == 'Stop':
            for current_meal, meal_products in sorted(cart.items(), key=lambda x: (-len(x[1]), x[0])):
                result += f'{current_meal}:\n'
                for prod in sorted(meal_products):
                    result += f' - {prod}\n'
            if no_products:
                result = "No products in the cart!"
            return result

        meal, product = meal_product
        if len(cart[meal]) < max_products[meal]:
            cart[meal].add(product)
            no_products = False

print(shopping_cart(
    'Stop',
    ('Pizza', 'ham'),
    ('Pizza', 'mushrooms'),
))




