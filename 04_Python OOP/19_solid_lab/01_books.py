class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.page = 0

    def turn_page(self, page):
        self.page = page


class Library:
    def __init__(self, books, location):
        self.books = books
        self.location = location

    def add_book(self, book: Book):
        self.books.append(book)
