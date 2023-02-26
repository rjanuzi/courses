import express from "express";

const app = express();

/* Configure express to receive JSON data from POSTs */
app.use(express.json());

const books = [
  { id: 1, title: "Lord of the Rings", author: "J.R.R. Tolkien" },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },
];
let lastId = books.length;

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
  res.status(200).json(books);
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
