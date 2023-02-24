class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity == 0) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, paid: false }); //*** */
        this.capacity -= 1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        const book = this.books.find(b => b.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`)
        } else if (book.paid == true) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            book.paid = true;
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {
        const book = this.books.find(b => b.bookName == bookName);
        if (!book) {
            throw new Error("The book, you're looking for, is not found.")
        } else if (book.paid == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else{
            this.books.splice(this.books.indexOf(book), 1);
            this.capacity += 1;
            return `${bookName} remove from the collection.`;
        }
    }

    getStatistics(bookAuthor){
        if (!bookAuthor){
            let result = [`The book collection has ${this.capacity} empty spots left.`];
            this.books
            .sort((a, b)=> a.bookName.localeCompare(b.bookName))
            .map(book => result.push([`${book.bookName} == ${book.bookAuthor} - ${book.paid == true ? 'Has': 'Not'} Paid.`]))
            return result.join('\n')
        } else{
            const book = this.books.find(b=> b.bookAuthor == bookAuthor);
            if (!book){
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else{
                return `${book.bookName} == ${book.bookAuthor} - ${book.paid == true ? 'Has': 'Not'} Paid.`
            }

        }
    }

}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


