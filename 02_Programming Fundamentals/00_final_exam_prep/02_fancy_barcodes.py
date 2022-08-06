import re
pattern = r"@#+(?P<food>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+"
count = int(input())
valid_barcodes = []

for _ in range(count):
    barcode = input()
    valid_barcode = re.findall(pattern, barcode)
    if valid_barcode:
        for item in valid_barcode:
            score = [x for x in item if x.isdigit()]
            if len(score) == 0:
                print("Product group: 00")
            else:
                print(f"Product group: {''.join(score)}")
    else:
        print("Invalid barcode")
