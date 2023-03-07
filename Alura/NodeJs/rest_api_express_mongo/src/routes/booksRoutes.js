import BookController from "../controllers/booksConstroller.js";
import express from "express";

const booksRoutes = express.Router();

booksRoutes.get("/books", BookController.listBooks);
/* Seach shall be registered before "by_id". Other wise it will respond first as "seach" in the :id param */
booksRoutes.get("/books/search", BookController.listBooksByAuthor);
booksRoutes.get("/books/:id", BookController.getBook);
booksRoutes.post("/books", BookController.createBook);
booksRoutes.put("/books/:id", BookController.updateBook);
booksRoutes.delete("/books/:id", BookController.deleteBook);

export default booksRoutes;
