import express from "express";
import db from "./gateways/db.js";
import books from "./models/Book.js";

import routes from "./routes/index.js";

/* Direct error and connection message to console */
db.on("error", console.error.bind(console, "DB Connection Error:"));
db.once("open", () => {
  console.log("DB Connected!");
});

const app = express();

routes(app);

export default app;
