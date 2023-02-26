import express from "express";
import db from "./gateways/db.js";
import books from "./models/Book.js";

/* Direct error and connection message to console */
db.on("error", console.error.bind(console, "DB Connection Error:"));
db.once("open", () => {
  console.log("DB Connected!");
});

const app = express();

/* Configure express to receive JSON data from POSTs */
app.use(express.json());

function findBook(id) {
  return books.find((book) => book.id === Number(id));
}

function findBookIdx(id) {
  return books.findIndex((book) => book.id === Number(id));
}

/* API Home Page */
app.get("/", (req, res) => {
  res.send("Library API");
});

/* Books GET */
app.get("/books", (req, res) => {
  books.find((err, booksRetrivied) => {
    if (err) {
      res.status(500).send("Error while getting books");
    } else {
      res.status(200).json(booksRetrivied);
    }
  });
});

app.get("/books/:id", (req, res) => {
  const book = findBook(req.params.id);
  if (book === undefined) {
    res.status(404).send(`Book not found`);
  } else {
    res.status(200).json(findBook(req.params.id));
  }
});

/* Books Insert */
app.post("/books", (req, res) => {
  const bookData = req.body;
  bookData.id = ++lastId;
  books.push(bookData);
  res.status(201).send(`Book created with ID ${bookData.id}`);
});

/* Books Update */
app.put("/books/:id", (req, res) => {
  const bookNewData = req.body;
  const bookIdx = findBookIdx(req.params.id);
  if (bookIdx === -1) {
    res.status(404).send(`Book not found`);
  } else {
    bookNewData.id = books[bookIdx].id;
    books[bookIdx] = bookNewData;
    res.status(200).send(`Book with ID ${bookNewData.id} updated`);
  }
});

/* Books Delete */
app.delete("/books/:id", (req, res) => {
  const { id } = req.params; /* Same as "const id = req.params.id" */
  const bookIdx = findBookIdx(id);
  if (bookIdx === -1) {
    res.status(404).send(`Book not found`);
  } else {
    books.splice(bookIdx, 1);
    res.status(201).send(`Book with ID ${id} deleted`);
  }
});

export default app;
