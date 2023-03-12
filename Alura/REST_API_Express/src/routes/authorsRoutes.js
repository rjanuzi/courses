import AuthorController from "../controllers/authorsConstroller.js";
import express from "express";

const authorsRoutes = express.Router();

authorsRoutes.get("/authors", AuthorController.listAuthors);
authorsRoutes.get("/authors/:id", AuthorController.getAuthor);
authorsRoutes.post("/authors", AuthorController.createAuthor);
authorsRoutes.put("/authors/:id", AuthorController.updateAuthor);
authorsRoutes.delete("/authors/:id", AuthorController.deleteAuthor);

export default authorsRoutes;
