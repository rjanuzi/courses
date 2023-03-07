import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    /* Find all books and bring the String ID for Author */
    // books.find((err, booksRetrivied) => {
    //   if (err) {
    //     res.status(500).send("Error while getting books");
    //   } else {
    //     res.status(200).json(booksRetrivied);
    //   }
    // });

    /* Find all books and populate with the correspondent author's name */
    books
      .find()
      .populate("author", "name") /* Populate only the "name" field */
      .populate("publisher", "name")
      .exec((err, booksRetrivied) => {
        if (err) {
          res.status(500).send(`${err.message} - Error while getting books`);
        } else {
          res.status(200).json(booksRetrivied);
        }
      });
  };

  static getBook = (req, res) => {
    const idToFind = req.params.id;
    books
      .findById(idToFind)
      .populate("author") /* Populate all fields */
      .exec((err, bookRetrivied) => {
        if (err) {
          res.status(400).send(`${err.message} - Book not found`);
        } else {
          res.status(200).json(bookRetrivied);
        }
      });
  };

  static createBook = (req, res) => {
    let newBook = new books(req.body);
    newBook.save((err, bookCreated) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while creating book`);
      } else {
        res.status(201).json(bookCreated);
      }
    });
  };

  static updateBook = (req, res) => {
    const idToUpdate = req.params.id;
    const bookNewData = req.body;

    books.findByIdAndUpdate(
      idToUpdate,
      { $set: bookNewData },
      { new: true },
      (err, bookUpdated) => {
        if (err) {
          res.status(500).send(`${err.message} - Error while updating book`);
        } else {
          res.status(200).json(bookUpdated);
        }
      }
    );
  };

  static deleteBook = (req, res) => {
    const idToDelete = req.params.id;
    books.findByIdAndDelete(idToDelete, (err, bookDeleted) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while deleting book`);
      } else {
        res.status(200).json(bookDeleted);
      }
    });
  };
}

export default BookController;
