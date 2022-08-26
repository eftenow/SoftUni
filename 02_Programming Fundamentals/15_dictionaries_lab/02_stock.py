elements = input().split()
bakery = {}
products_to_search = input().split()

for el in range(0, len(elements), 2):
    food = elements[el]
    amount = elements[el+1]
    bakery[food] = amount

for product in products_to_search:
    if product in bakery.keys():
        print(f"We have {bakery[product]} of {product} left")
    else:
        print(f"Sorry, we don't have {product}")
