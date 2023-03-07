import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authorsRetrivied) => {
      if (err) {
        res.status(500).send("Error while getting authors");
      } else {
        res.status(200).json(authorsRetrivied);
      }
    });
  };

  static getAuthor = (req, res) => {
    const idToFind = req.params.id;
    authors.findById(idToFind, (err, authorRetrivied) => {
      if (err) {
        res.status(400).send(`${err.message} - Author not found`);
      } else {
        res.status(200).json(authorRetrivied);
      }
    });
  };

  static createAuthor = (req, res) => {
    let newAuthor = new authors(req.body);
    newAuthor.save((err, authorCreated) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while creating author`);
      } else {
        res.status(201).json(authorCreated);
      }
    });
  };

  static updateAuthor = (req, res) => {
    const idToUpdate = req.params.id;
    const authorNewData = req.body;

    authors.findByIdAndUpdate(
      idToUpdate,
      { $set: authorNewData },
      { new: true },
      (err, authorUpdated) => {
        if (err) {
          res.status(500).send(`${err.message} - Error while updating author`);
        } else {
          res.status(200).json(authorUpdated);
        }
      }
    );
  };

  static deleteAuthor = (req, res) => {
    const idToDelete = req.params.id;
    authors.findByIdAndDelete(idToDelete, (err, authorDeleted) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while deleting author`);
      } else {
        res.status(200).json(authorDeleted);
      }
    });
  };
}

export default AuthorController;
