const db = require("../models"); /* By default get the index.js */
const { Op } = require("sequelize");

class ClassesController {
  static async getAllClasses(req, res) {
    try {
      const classes = await db.Class.findAll();
      return res.status(200).json(classes);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving classes. - ${err.message}`,
      });
    }
  }

  static async getClassById(req, res) {
    try {
      const _class = await db.Class.findByPk(req.params.id);
      return res.status(200).json(_class);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving _class. - ${err.message}`,
      });
    }
  }

  static async createClass(req, res) {
    try {
      const _classData = req.body;
      const _class = await db.Class.create(_classData);
      return res.status(201).json(_class);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while creating _class. - ${err.message}`,
      });
    }
  }

  static async updateClass(req, res) {
    try {
      const _classNewData = req.body;
      const _classId = req.params.id;

      await db.Class.update(_classNewData, {
        where: { id: _classId },
      });

      res.status(201).json(`Class with id ${_classId} updated.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating _class. - ${err.message}`,
      });
    }
  }

  static async deleteClass(req, res) {
    try {
      const _classId = req.params.id;

      await db.Class.destroy({
        where: { id: _classId },
      });

      res.status(201).json(`Class with id ${_classId} deleted.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting _class. - ${err.message}`,
      });
    }
  }

  static async restoreClass(req, res) {
    try {
      const classId = req.params.id;

      await db.Class.restore({
        where: { id: classId },
      });

      res.status(201).json(`Class with id ${classId} restored.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while restoring class. - ${err.message}`,
      });
    }
  }
}

module.exports = ClassesController;
