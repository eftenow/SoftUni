const tbody = document.querySelector('tbody');
const formEl = document.querySelector('form');
const url = 'http://localhost:3030/jsonstore/collections/books';

const titleField = document.querySelector('input[name="title"]')
const authorField = document.querySelector('input[name="author"]')

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadBooks);

const submitBtn = formEl.querySelector('button');
submitBtn.addEventListener('click', createBook)

const saveBtn = document.createElement('button');
saveBtn.textContent = 'Save';
saveBtn.addEventListener('click', saveBookUpdates);

async function loadBooks(ev) {
    let response = await fetch(url);
    let booksData = await response.json();

    Object.entries(booksData).forEach(bookData => {
        appendElementToTable(bookData)
        console.log(bookData);
    });
}

async function createBook(ev) {
    ev.preventDefault();
    const form = new FormData(formEl);
    const createTitle = form.get('title');
    const createAuthor = form.get('author');
    const bookObj = {title : createTitle, author : createAuthor};

    const createResponse = await fetch(url, {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(bookObj)
    });
    const createdBook = await createResponse.json();
    appendElementToTable([createdBook._id, bookObj]);
}

function appendElementToTable(bookData) {
    const bookId = bookData[0];
    const bookObj = bookData[1];

    const newBook = document.createElement('tr');
    newBook.id = bookId;

    const title = document.createElement('td');
    const author = document.createElement('td');
    title.textContent = bookObj.title;
    author.textContent = bookObj.author;

    const btnSection = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editBook);
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', deleteBook);

    btnSection.appendChild(editBtn);
    btnSection.appendChild(delBtn);

    newBook.append(author, title, btnSection);
    tbody.appendChild(newBook);

}

function editBook(ev) {
    const formTitle = document.querySelector('form h3');
    formTitle.textContent = 'Edit FORM';
    formEl.replaceChild(saveBtn, submitBtn);

    const editBook = ev.target.closest('tr');
    const bookElements = editBook.querySelectorAll('td');
    const bookId = editBook.id;
    const editTitle = bookElements[0].textContent;
    const editAuthor = bookElements[1].textContent;

    titleField.value = editTitle;
    titleField.id = bookId;
    authorField.value = editAuthor;
}

async function saveBookUpdates(ev) {
    formEl.replaceChild(submitBtn, saveBtn);

    const currentId = titleField.id;
    const currentBook = document.getElementById(currentId);

    const bookElements = currentBook.querySelectorAll('td');
    const updatedTitle = titleField.value;
    const updatedAuthor = authorField.value;

    const updatedBook = {
        author: updatedAuthor,
        title: updatedTitle
    };

    await fetch(`${url}/${currentId}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedBook)
    })

    bookElements[0].textContent = updatedTitle;
    bookElements[1].textContent = updatedAuthor;
    titleField.value = '';
    authorField.value = '';
}

async function deleteBook(ev) {
    const deleteBook = ev.target.closest('tr');
    const deleteId = deleteBook.id;

    deleteBook.remove();
    await fetch(`${url}/${deleteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': `application/json`
        },
    });
}