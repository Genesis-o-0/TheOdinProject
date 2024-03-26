// Controller
export default function BooksController(model, view) {
  this.model = model;
  this.view = view;
}

BooksController.prototype.init = function () {
  this.view.updateBooksList(this.model.books);
  this.bindEvents();
};

BooksController.prototype.bindEvents = function () {
  const root = document.getElementById("app");
  const form = document.getElementById("bookForm");
  const formElementsContainer = document.querySelector(
    ".form-elements__container"
  );
  root.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.classList.contains("toggleReadBtn")
    ) {
      this.handleToggleBookRead(event.target.dataset.bookId);
    } else if (
      event.target.tagName === "BUTTON" &&
      event.target.classList.contains("removeBook")
    ) {
      this.handleDeleteBook(event.target.dataset.bookId);
    }
  });

  document.getElementById("add-book").addEventListener("click", () => {
    form.classList.toggle("hide-modal");
  });

  form.addEventListener("click", (e) => {
    if (
      !formElementsContainer.contains(e.target) &&
      !e.target.classList.contains("submit-btn")
    ) {
      form.classList.add("hide-modal");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    entries.readStatus = entries.readStatus === "on" ? true : false;
    this.handleAddBook(entries);
    form.classList.add("hide-modal");
    form.reset();
  });
};

BooksController.prototype.handleToggleBookRead = function (bookId) {
  this.model.toggleReadBook(bookId);
  this.view.updateBooksList(this.model.books);
};

BooksController.prototype.handleDeleteBook = function (bookId) {
  this.model.deleteBook(bookId);
  this.view.updateBooksList(this.model.books);
};

BooksController.prototype.handleAddBook = function (bookData) {
  this.model.addBook(bookData);
  this.view.updateBooksList(this.model.books);
};
