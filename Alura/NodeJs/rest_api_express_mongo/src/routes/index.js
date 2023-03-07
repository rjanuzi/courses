import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js";
import publishersRoutes from "./publishersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Books API");
  });

  app.use(express.json(), booksRoutes, authorsRoutes, publishersRoutes);
};

export default routes;
