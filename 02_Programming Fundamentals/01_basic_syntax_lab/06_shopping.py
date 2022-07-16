budget = int(input())
product = input()
overdraft = False

while product != "End":
    product = int(product)
    budget -= product
    if budget < 0:
        overdraft = True
        break
    product = input()

if overdraft:
    print("You went in overdraft!")
else:
    print("You bought everything needed.")
