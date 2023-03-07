import BookController from "../controllers/booksConstroller.js";
import express from "express";

const booksRoutes = express.Router();

booksRoutes.get("/books", BookController.listBooks);
booksRoutes.get("/books/:id", BookController.getBook);
booksRoutes.post("/books", BookController.createBook);
booksRoutes.put("/books/:id", BookController.updateBook);
booksRoutes.delete("/books/:id", BookController.deleteBook);

export default booksRoutes;
