import BooksModel from "./BooksModel.js";
import BooksView from "./BooksView.js";
import BooksController from "./app.js";

const root = document.getElementById("app");
const model = new BooksModel();
const view = new BooksView(root);

const booksController = new BooksController(model, view);
booksController.init();
