fav_book = input()
current_book = input()
sum_of_books = 0
out_of_books = False


while fav_book != current_book:
    current_book = input()
    sum_of_books += 1
    if current_book == "No More Books":
        out_of_books = True
        break
    

if out_of_books:
    print("The book you search is not here!")
    print(f"You checked {sum_of_books} books.")
else:
    print(f"You checked {sum_of_books} books and found it.")
