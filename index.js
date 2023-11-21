const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? 'not yet' : ""} read`;
}

function addBookToLibrary() {
  let title, author, pages, read;
  while(!title) {
    title = prompt("What is the title of the book?");
  }
  while(!author) {
    author = prompt("Who wrote it?");
  }
  while(!pages) {
    const input = Number(prompt("How many pages does it have?"))
    if(Number.isInteger(input)) {
      pages = input;
    } else {
      alert('Please input a number');
    }
  }
  read = confirm("Have you read it?");

  myLibrary.push(new Book(title, author, pages, read));
}