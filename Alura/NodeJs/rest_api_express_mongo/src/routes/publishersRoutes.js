import PublisherController from "../controllers/publishersConstroller.js";
import express from "express";

const publishersRoutes = express.Router();

publishersRoutes.get("/publishers", PublisherController.listPublishers);
publishersRoutes.get("/publishers/:id", PublisherController.getPublisher);
publishersRoutes.post("/publishers", PublisherController.createPublisher);
publishersRoutes.put("/publishers/:id", PublisherController.updatePublisher);
publishersRoutes.delete("/publishers/:id", PublisherController.deletePublisher);

export default publishersRoutes;
