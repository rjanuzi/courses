const db = require("../models"); /* By default get the index.js */
const { Sequelize } = require("sequelize");

class PeopleController {
  static async getAllPeople(req, res) {
    try {
      /* Using custom scope from the Person model to not apply the active filter (defaulScope) */
      const people = await db.Person.scope("all").findAll();
      return res.status(200).json(people);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving people. - ${err.message}`,
      });
    }
  }

  static async getActivePeople(req, res) {
    try {
      /* The default scope defined in the Person model, will ignore 
      inactive persons. */
      const people = await db.Person.findAll();

      return res.status(200).json(people);
    } catch (err) {
      res.status(500).send({
        message: `Some error while retrieving active people. - ${err.message}`,
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

      await db.Person.scope("all").update(personNewData, {
        where: { id: personId },
      });

      res.status(201).json(`Person with id ${personId} updated.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating person. - ${err.message}`,
      });
    }
  }

  static async inactivateStudent(req, res) {
    try {
      const studentId = req.params.sudentId;

      /* To ensure that all the operation are done or any is done, we can use 
      transaction. If both updates are executed completely it finishes normally,
      otherwise we roll-back the first one. */
      db.sequelize.transaction(async (updateTransaction) => {
        await db.Person.scope("all").update(
          { active: false },
          {
            where: { id: Number(studentId) },
          },
          { transaction: updateTransaction }
        );

        /* When inactivating a student, all the related subscriptions also shall be inactivated. */
        await db.Subscription.update(
          { status: "Inactive" },
          {
            where: {
              student_id: Number(studentId),
            },
          },
          { transaction: updateTransaction }
        );

        res.status(201).json(`Student with id ${studentId} inactivated.`);
      });
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating person. - ${err.message}`,
      });
    }
  }

  static async deletePerson(req, res) {
    try {
      const personId = req.params.id;

      await db.Person.scope("all").destroy({
        where: { id: personId },
      });

      res.status(201).json(`Person with id ${personId} deleted.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting person. - ${err.message}`,
      });
    }
  }

  static async restorePerson(req, res) {
    try {
      const personId = req.params.id;

      await db.Person.scope("all").restore({
        where: { id: personId },
      });

      res.status(201).json(`Person with id ${personId} restored.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while restoring person. - ${err.message}`,
      });
    }
  }

  static async getPeopleByName(req, res) {
    try {
      const person = await db.Person.scope("all").findAll({
        where: { name: { [Sequelize.Op.like]: `%${req.query.name}%` } },
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

  static async restoreSubscription(req, res) {
    try {
      const subscriptionId = req.params.id;

      await db.Subscription.restore({
        where: { id: subscriptionId },
      });

      res
        .status(201)
        .json({ message: `Subscription with id ${subscriptionId} restored.` });
    } catch (err) {
      res.status(500).json({
        message: `Some error occurred while restoring subscription. - ${err.message}`,
      });
    }
  }

  static async getSubscriptions(req, res) {
    try {
      const { studentId } = req.params;

      /* WHERE-based way */
      // const subscriptions = await db.Subscription.findAll({
      //   where: {
      //     student_id: Number(studentId),
      //   },
      // });

      const student = await db.Person.findOne({
        where: {
          id: Number(studentId),
        },
      });

      /* "Mixin" - getSubscriptions is a auto-generate method based
      on the scope defined at the person model for the relationship between
      person and subscription */
      const subscriptions = await student.getSubscriptions();

      return res.status(201).json(subscriptions);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while getting student subscriptions. - ${err.message}`,
      });
    }
  }

  static async getSubscriptionsByClass(req, res) {
    try {
      const { classId } = req.params;

      const subscriptions = await db.Subscription.findAndCountAll({
        where: {
          class_id: Number(classId),
          status: "Active",
        },
        limit: 20,
        order: [["student_id", "ASC"]],
      });

      return res.status(201).json(subscriptions);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while getting student subscriptions. - ${err.message}`,
      });
    }
  }

  static async getFullClasses(req, res) {
    try {
      const { classLimit } = req.params;

      const subscriptions = await db.Subscription.findAndCountAll({
        where: {
          status: "Active",
        },
        attributes: ["class_id"],
        group: "class_id",

        /* Here we need to use the SQL language, since Sequelize don't
           have a ready function to do what we need.
           */
        having: Sequelize.literal(`COUNT(class_id) >= ${classLimit}`),
      });

      return res.status(201).json(subscriptions);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while getting student subscriptions. - ${err.message}`,
      });
    }
  }
}

module.exports = PeopleController;
