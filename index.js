let myLibrary = [
  new Book('The Hobbit', 'J.R.R. Tolkien', 295, false),
  new Book("Hitchhiker's Guide to the Galaxy", 'Douglas Adams', 254, true),
];

const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);
const libraryContainer = document.querySelector('.library-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const title = prompt('What is the title of the book?');
  const author = prompt('Who wrote it?');
  const pages = parseInt(prompt('How many pages does it have?'));
  const read = confirm('Have you read it yet?');

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  updateBooks();
}

function makeBookCard(book) {
  const readText = book.read ? 'read' : 'not read yet';

  const card = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const bookRead = document.createElement('p');
  const toggleReadButton = document.createElement('button');

  toggleReadButton.addEventListener('click', (e) => {
    const title = e.target.parentNode.firstChild.textContent;
    toggleRead(title);
  });

  toggleReadButton.textContent = 'Toggle Read';

  bookTitle.classList.add('book-title');
  bookTitle.textContent = book.title;

  bookAuthor.classList.add('book-author');
  bookAuthor.textContent = book.author;

  bookPages.classList.add('book-pages');
  bookPages.textContent = `${book.pages} pages`;

  bookRead.classList.add('book-read');
  bookRead.textContent = readText;

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(bookRead);
  card.appendChild(toggleReadButton);

  card.classList.add('book-card');

  return card;
}

function toggleRead(title) {
  const foundBook = myLibrary.find((book) => book.title === title);
  foundBook.toggleReadStatus();
  updateBooks();
}

function clearBooks() {
  libraryContainer.innerHTML = '';
}

function renderBooks() {
  myLibrary.forEach((book) => {
    const card = makeBookCard(book);
    libraryContainer.appendChild(card);
  });
}

function updateBooks() {
  clearBooks();
  renderBooks();
}
