let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt('What is the title of the book?');
  const author = prompt('Who wrote it?');
  const pages = parseInt(prompt('How many pages does it have?'));
  const read = confirm('Have you read it yet?');

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function renderBooks() {
  const libraryContainer = document.querySelector('.library-container');
  myLibrary.forEach((book) => {
    const readText = book.read ? 'not read yet' : 'read';

    const card = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookRead = document.createElement('p');

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
    libraryContainer.appendChild(card);
  });
}
