const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => `${title} by ${author}, ${pages} pages, ${!read ? 'not yet' : ""} read`;

function addBookToLibrary(book) {
  myLibrary.push(book);
}