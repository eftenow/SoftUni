class Catalogue:
    products = []

    def __init__(self, name: str):
        self.name = name

    def add_product(self, product_name: str):
        Catalogue.products.append(product_name)

    def get_by_letter(self, first_letter: str):
        return [x for x in Catalogue.products if x.startswith(first_letter)]

    def __repr__(self):
        message = f"Items in the {self.name} catalogue:\n"
        message += "\n".join(sorted(Catalogue.products))
        return message
