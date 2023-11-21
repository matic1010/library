const myLibrary = [
  new Book("Test 1", "Timo Brudi", 333, false),
  new Book("Test Book", "Nils Matic", 873, true),
  new Book("My Favorite Book", "Iyo Takayama", 1234, true),
  new Book("Test 2", "Timo Brudi", 123, false),
  new Book("Test 3", "Timo Brudi", 90, false)
];

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

function makeBookCard(book) {
  const card = document.createElement("div");
  card.classList.add('book-card');

  const title = document.createElement("h3");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = book.author;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`
  card.appendChild(pages);

  const readStatus = document.createElement("p");
  readStatus.textContent = `${book.read ? 'read' : 'not yet read'}`
  card.appendChild(readStatus);

  return card;
}

function renderBooks() {
  const booksDiv = document.getElementById("books");
  booksDiv.innerHTML = "";
  myLibrary.forEach(book => {
    const bookCard = makeBookCard(book);
    booksDiv.appendChild(bookCard)
  })
}

renderBooks();