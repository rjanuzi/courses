import publishers from "../models/Publisher.js";

class PublisherController {
  static listPublishers = (req, res) => {
    publishers.find((err, publishersRetrivied) => {
      if (err) {
        res.status(500).send("Error while getting publishers");
      } else {
        res.status(200).json(publishersRetrivied);
      }
    });
  };

  static getPublisher = (req, res) => {
    const idToFind = req.params.id;
    publishers.findById(idToFind, (err, publisherRetrivied) => {
      if (err) {
        res.status(400).send(`${err.message} - Publisher not found`);
      } else {
        res.status(200).json(publisherRetrivied);
      }
    });
  };

  static createPublisher = (req, res) => {
    let newPublisher = new publishers(req.body);
    newPublisher.save((err, publisherCreated) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while creating publisher`);
      } else {
        res.status(201).json(publisherCreated);
      }
    });
  };

  static updatePublisher = (req, res) => {
    const idToUpdate = req.params.id;
    const publisherNewData = req.body;

    publishers.findByIdAndUpdate(
      idToUpdate,
      { $set: publisherNewData },
      { new: true },
      (err, publisherUpdated) => {
        if (err) {
          res
            .status(500)
            .send(`${err.message} - Error while updating publisher`);
        } else {
          res.status(200).json(publisherUpdated);
        }
      }
    );
  };

  static deletePublisher = (req, res) => {
    const idToDelete = req.params.id;
    publishers.findByIdAndDelete(idToDelete, (err, publisherDeleted) => {
      if (err) {
        res.status(500).send(`${err.message} - Error while deleting publisher`);
      } else {
        res.status(200).json(publisherDeleted);
      }
    });
  };
}

export default PublisherController;
