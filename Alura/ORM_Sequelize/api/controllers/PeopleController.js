const db = require("../models"); /* By default get the index.js */
const { Op } = require("sequelize");

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

  static async getPersonById(req, res) {
    try {
      const person = await db.Person.findByPk(req.params.id);
      return res.status(200).json(person);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving person. - ${err.message}`,
      });
    }
  }

  static async createPerson(req, res) {
    try {
      const personData = req.body;
      const person = await db.Person.create(personData);
      return res.status(201).json(person);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while creating person. - ${err.message}`,
      });
    }
  }

  static async updatePerson(req, res) {
    try {
      const personNewData = req.body;
      const personId = req.params.id;

      await db.Person.update(personNewData, {
        where: { id: personId },
      });

      res.status(201).json(`Person with id ${personId} updated.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating person. - ${err.message}`,
      });
    }
  }

  static async deletePerson(req, res) {
    try {
      const personId = req.params.id;

      await db.Person.destroy({
        where: { id: personId },
      });

      res.status(201).json(`Person with id ${personId} deleted.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting person. - ${err.message}`,
      });
    }
  }

  static async getPeopleByName(req, res) {
    try {
      const person = await db.Person.findAll({
        where: { name: { [Op.like]: `%${req.query.name}%` } },
      });
      return res.status(200).json(person);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving person. - ${err.message}`,
      });
    }
  }

  static async getOneSubscription(req, res) {
    try {
      /* Params  = people/:studentId/subscriptions/:subscriptionId*/
      const { studentId, subscriptionId } = req.params;
      console.log(studentId, subscriptionId);
      const subscription = await db.Subscription.findOne({
        where: {
          id: Number(subscriptionId),
          student_id: Number(studentId),
        },
      });

      return res.status(200).json(subscription);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving subscription. - ${err.message}`,
      });
    }
  }

  static async createSubcription(req, res) {
    try {
      const { studentId } = req.params;

      /* Create a new obj with the subscription data adding the studentId data */
      const newSubscriptionData = {
        ...req.body,
        student_id: Number(studentId),
      };

      const newSubscription = await db.Subscription.create(newSubscriptionData);
      return res.status(501).json(newSubscription);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while creating subscription. - ${err.message}`,
      });
    }
  }

  static async updateSubscription(req, res) {
    try {
      const { studentId, subscriptionId } = req.params;
      const subscriptionNewData = req.body;

      await db.Subscription.update(subscriptionNewData, {
        where: {
          id: Number(subscriptionId),
          student_id: Number(studentId),
        },
      });

      res.status(201).json(`Subscription with id ${subscriptionId} updated.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating subscription. - ${err.message}`,
      });
    }
  }

  static async deleteSubscription(req, res) {
    try {
      const { studentId, subscriptionId } = req.params;

      console.log(studentId, subscriptionId);

      await db.Subscription.destroy({
        where: {
          id: Number(subscriptionId),
          student_id: Number(studentId),
        },
      });

      res.status(201).json(`Subscription with id ${subscriptionId} deleted.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting subscription. - ${err.message}`,
      });
    }
  }
}

module.exports = PeopleController;
