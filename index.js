const myLibrary = [
  new Book("Test 1", "Timo Brudi", 333, false),
  new Book("Test Book", "Nils Matic", 873, true),
  new Book("My Favorite Book", "Iyo Takayama", 1234, true),
  new Book("Test 2", "Timo Brudi", 123, false),
  new Book("Test 3", "Timo Brudi", 90, false)
];

const newBookButton = document.getElementById("new-book-button");

newBookButton.addEventListener("click", () => {
  const addBookModal = document.getElementById("new-book-modal");
  addBookModal.showModal();
});

const addBookButton = document.getElementById("add-book-button");

addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  const addBookModal = document.getElementById("new-book-modal");
  addBookModal.close();

  const bookToSave = {title, author, pages, read};

  addBookToLibrary(bookToSave);
  renderBooks();
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? 'not yet' : ""} read`;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary({title, author, pages, read}) {
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

  const removeButton = document.createElement("button");
  removeButton.addEventListener("click", (e) => {
    removeBookFromLibrary(Number(e.target.parentElement.dataset.index));
    renderBooks();
  });
  removeButton.innerHTML = "Remove Book"
  card.appendChild(removeButton);

  const toggleReadButton = document.createElement("button");
  toggleReadButton.innerHTML = "Toggle Read";
  toggleReadButton.classList.add("toggle-read-button");
  toggleReadButton.addEventListener("click", () => {
    book.toggleRead();
    renderBooks();
  });
  card.appendChild(toggleReadButton);

  return card;
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1)
}

function renderBooks() {
  const booksDiv = document.getElementById("books");
  booksDiv.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = makeBookCard(book);
    bookCard.dataset.index = index;
    booksDiv.appendChild(bookCard)
  })
}

renderBooks();