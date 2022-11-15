from library_project.user import User


class Library:
    def __init__(self):
        self.user_records = []
        self.books_available = {}
        self.rented_books = {}

    def get_book(self, author: str, book_name: str, days_to_return: int, user: User):
        for renter in self.rented_books:
            for book, days in self.rented_books[renter].items():
                if book == book_name:
                    return f'The book "{book_name}" is already rented and will be available in {days} days!'

        for book in self.books_available[author]:
            if book == book_name:
                user.books.append(book_name)
                self.books_available[author].remove(book_name)
                if user.username not in self.rented_books:
                    self.rented_books[user.username] = {}
                self.rented_books[user.username].update({book_name:days_to_return})
                return f"{book_name} successfully rented for the next {days_to_return} days!"

    def return_book(self, author, book_name, user: User):
        if book_name in user.books:
            user.books.remove(book_name)
            self.books_available[author].append(book_name)
            self.rented_books[user.username].pop(book_name)
        return f"{user.username} doesn't have this book in his/her records!"