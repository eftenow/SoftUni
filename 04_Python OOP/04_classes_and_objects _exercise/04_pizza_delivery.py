class PizzaDelivery:
    def __init__(self, name: str, price: float, ingredients:dict):
        self.name = name
        self.price = price
        self.ingredients = ingredients
        self.ordered = False

    def add_extra(self, ingredient, quantity, price_per_piece):
        if self.ordered:
            return f"Pizza {self.name} already prepared, and we can't make any changes!"

        if ingredient in self.ingredients:
            self.ingredients[ingredient] += quantity
        else:
            self.ingredients[ingredient] = quantity
        self.price += quantity * price_per_piece

    def remove_ingredient(self, ingredient, quantity, price_per_piece):
        if self.ordered:
            return f"Pizza {self.name} already prepared, and we can't make any changes!"

        if ingredient not in self.ingredients:
            return f'Wrong ingredient selected! We do not use {ingredient} in {self.name}!'
        if quantity > self.ingredients[ingredient]:
            return f'Please check again the desired quantity of {ingredient}!'

        self.ingredients[ingredient] -= quantity
        self.price -= quantity * price_per_piece

    def make_order(self):
        self.ordered = True
        ingredients_used = ', '.join([f'{k}: {v}' for k, v in self.ingredients.items()])
        return f"You've ordered pizza {self.name} prepared with {ingredients_used} and the price will be {self.price}lv."
