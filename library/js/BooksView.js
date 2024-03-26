export default function BooksView(root) {
  this.root = root;
  this.init();
}

BooksView.prototype.init = function () {
  this.root.innerHTML = `
  <button type="submit" id="add-book">Add book</button>
  <form class="modal hide-modal" id="bookForm">
  <div class="form-elements__container">
    <h2>Add new book</h2>
    <input type="text" placeholder="Title" name="title" required />
    <input type="text" placeholder="Author" name="author" required />
    <input type="number" placeholder="Pages" name="numberOfPages" max="3500" required />
    <div class="read-status__container">
      <label> Have you read it? </label>
      <input type="checkbox" name="readStatus" id="readIt" />
    </div>
    <button type="submit" class="submit-btn">Add</button>
  </div>
</form>
<div id="books-container"></div>
`;
};

BooksView.prototype._addBookCard = function ({
  id,
  title,
  author,
  numberOfPages,
  readStatus,
}) {
  const status = readStatus ? "Read" : "Not Read";
  let readStatusClass = readStatus ? "status-read" : "status-not__read";

  const bookCard = `
    <article class="card">
        <h2>${title}</h2>
        <p>By <span class="author">${author}</span></p>
        <p><span class="length">${numberOfPages}</span> pages</p>
        <button type="button" class="toggleReadBtn ${readStatusClass}" data-book-id=${id}>${status}</button>
        <button type="button" class="removeBook" data-book-id=${id}>Delete</button>
    </article>
    `;

  return bookCard;
};

BooksView.prototype.updateBooksList = function (books) {
  const booksCardsContainer = document.getElementById("books-container");
  booksCardsContainer.innerHTML = "";
  for (const book of books) {
    const bookElement = this._addBookCard(book);
    booksCardsContainer.insertAdjacentHTML("beforeend", bookElement);
  }
};
