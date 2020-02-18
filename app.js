const container = document.querySelector('.container');
const btnShow = document.querySelector('#openBtn');
const modal = document.querySelector('.modal');
const bookForm = document.querySelector('.book-form');
const bookList = document.querySelector('.bookList');

btnShow.addEventListener('click', toggleModal);
bookForm.addEventListener('submit', addBookToLibrary);

let myLibrary = [];

function toggleModal() {
    modal.classList.toggle('toggle');
    
}

function generateElement(element, elementText, cssClass) {
    let generateEl = document.createElement(element);
    generateEl.textContent = elementText;
    generateEl.className = cssClass;
    return generateEl;
}

function removeBook(e) {

    let deleteIndex = e.target.getAttribute('data-id');
    myLibrary.splice(deleteIndex, 1);
    renderBooks(myLibrary);
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
    const bookStatus = false; //Assume book hasn't been read
    const bookLang = event.target.language.value;
    const bookRating = event.target.rating.value;

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus, bookLang, bookRating);
    
    myLibrary.push(newBook);
    toggleModal();
    renderBooks(myLibrary);

}

function changeStatus(e){
    let index = e.target.getAttribute('data-id');
    let currentStatus = myLibrary[index];
    
    currentStatus.readStatus = !currentStatus.readStatus; 

    renderBooks(myLibrary)
}

function renderBooks(myLibrary) {

    bookList.textContent = '';

    myLibrary.forEach((book, index) => {

        let bookDiv = generateElement('div', '', 'test');
        let paraTitle = generateElement('p', book.title);
        let paraAuthor = generateElement('p', book.author);
        let paraPages = generateElement('p', book.pageNumber);
        let paraStatus = generateElement('p', book.readStatus);
        let paraLanguage = generateElement('p', book.language);
        let paraRating = generateElement('p', book.rating);
        let deleteBtn = generateElement('button', 'DELETE', 'btn');
        deleteBtn.setAttribute('data-id', index); //data-id will be the index number
        let changeBtn = generateElement('button', 'Change Read Status', 'btn');
        changeBtn.setAttribute('data-id', index)

        bookDiv.append(paraTitle, paraAuthor, paraPages, paraStatus, paraLanguage, paraRating, deleteBtn, changeBtn);
        bookList.appendChild(bookDiv);
        
        changeBtn.addEventListener('click', changeStatus);
        deleteBtn.addEventListener('click', removeBook);
        
    })
}

