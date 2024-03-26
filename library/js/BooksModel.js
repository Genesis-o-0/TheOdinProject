// Model
export default function BooksModel() {
  this.books = JSON.parse(localStorage.getItem("booksList")) || [];
}

BooksModel.prototype.addBook = function (bookData) {
  this.books.push({ ...bookData, id: Math.floor(Math.random() * 1000) });
  this.saveBooks(this.books);
};

BooksModel.prototype.deleteBook = function (bookId) {
  this.books = this.books.filter((book) => book.id !== parseInt(bookId));
  this.saveBooks(this.books);
};

BooksModel.prototype.toggleReadBook = function (bookId) {
  this.books = this.books.map((book) =>
    book.id === parseInt(bookId)
      ? { ...book, readStatus: !book.readStatus }
      : book
  );
};

BooksModel.prototype.saveBooks = function (books) {
  localStorage.setItem("booksList", JSON.stringify(books));
};
