import re
info = input()
pattern = r"%(?P<Name>[A-Z][a-z]+)%[^|$%.]*<(?P<Product>\w+)>[^|$%.]*\|(?P<Count>\d+)\|[A-Za-z]*(?P<Price>\d+(\.\d+)?)\$"
total_income = 0
while info != "end of shift":
    matches = re.finditer(pattern, info)
    for match in matches:
        name = match["Name"]
        product = match["Product"]
        count = match["Count"]
        price = match["Price"]
        total_price = int(count) * float(price)
        total_income += total_price
        print(f"{name}: {product} - {total_price:.2f}")
    info = input()

print(f"Total income: {total_income:.2f}")
