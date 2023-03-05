import BookController from "../controllers/booksConstroller.js";
import express from "express";
import books from "../models/Book.js";

const booksRouter = express.Router();

booksRouter.get("/books", BookController.listBooks);
booksRouter.get("/books/:id", BookController.getBook);
booksRouter.post("/books", BookController.createBook);
booksRouter.put("/books/:id", BookController.updateBook);
booksRouter.delete("/books/:id", BookController.deleteBook);

export default booksRouter;
