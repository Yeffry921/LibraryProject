const container = document.querySelector('.container');
const btnShow = document.querySelector('#openBtn');
const modal = document.querySelector('.modal');
const bookForm = document.querySelector('.book-form');
const bookList = document.querySelector('.bookList');

btnShow.addEventListener('click', toggleModal);
bookForm.addEventListener('submit', addBookToLibrary);

let myLibrary = [{
    title: "Harry Potter and the Philosopher's Stone",
    author: " J. K. Rowling",
    pageNumber: "336",
    readStatus: "Yes",
    language: "English",
    rating: "9/10"
}, {
    title: "Harry Potter and the Philosopher's Stone",
    author: " J. K. Rowling",
    pageNumber: "336",
    readStatus: "Yes",
    language: "English",
    rating: "9/10"
}, {
    title: "Harry Potter and the Philosopher's Stone",
    author: " J. K. Rowling",
    pageNumber: "336",
    readStatus: "Yes",
    language: "English",
    rating: "9/10"
}];

function toggleModal() {
    modal.classList.toggle('toggle');
}

function generateElement(element, elementText) {
    let generateEl = document.createElement(element);
    generateEl.textContent = elementText;
    return generateEl;
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
        let bookDiv = generateElement('div', '');
        bookDiv.className = 'test'
        let paraTitle = generateElement('p', book.title);
        let paraAuthor = generateElement('p', book.author);
        let paraPages = generateElement('p', book.pageNumber);
        let paraStatus = generateElement('p', book.readStatus);
        let paraLanguage = generateElement('p', book.language);
        let paraRating = generateElement('p', book.rating);
        let deleteBtn = generateElement('button', 'DELETE');
        deleteBtn.classList = 'btn'


        bookDiv.append(paraTitle, paraAuthor, paraPages, paraStatus, paraLanguage, paraRating, deleteBtn);
        bookList.appendChild(bookDiv);
        console.log(myLibrary)
    })
}

renderBooks(myLibrary)