const container = document.querySelector('.container');
const btnShow = document.querySelector('#openBtn');
const modal = document.querySelector('.modal');
const bookForm = document.querySelector('.book-form');
const bookList = document.querySelector('.bookList');


let myLibrary = [];

btnShow.addEventListener('click', toggleModal);
bookForm.addEventListener('submit', addBookToLibrary);

function toggleModal(){
    modal.classList.toggle('toggle')
}


function Book(title, author, pageNumber, readStatus, language, rating) {
    this.title = title
    this.author = author
    this.pageNumber = pageNumber
    this.readStatus = readStatus
    this.language = language
    this.rating = rating
}


function addBookToLibrary(event) {
    event.preventDefault();
    const bookTitle = event.target.title.value;
    const bookAuthor = event.target.author.value;
    const bookPages = event.target.pageNumber.value;
    const bookStatus = event.target.readStatus.value;
    const bookLang = event.target.language.value;
    const bookRating = event.target.rating.value;

    
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus, bookLang, bookRating);
    
    myLibrary.push(newBook)

    renderBooks(myLibrary);

    toggleModal()
}

function renderBooks(myLibrary) {

    bookList.textContent = '';

    myLibrary.forEach((book) => {
        
        console.log(book);
        const p = document.createElement('p');
        p.textContent = book.title;
        
        const button = document.createElement('button');
        button.textContent = 'DELETE';

        bookList.appendChild(button);
        bookList.appendChild(p);
    })
}

