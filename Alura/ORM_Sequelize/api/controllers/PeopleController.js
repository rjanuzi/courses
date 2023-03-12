const db = require("../models"); /* By default get the index.js */

class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const persons = await db.Person.findAll();
      return res.status(200).json(persons);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving persons. - ${err.message}`,
      });
    }
  }
}

module.exports = PeopleController;
