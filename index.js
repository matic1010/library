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
  const pages = parseInt('How many pages does it have?');
  const read = confirm('Have you read it yet?');

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}
