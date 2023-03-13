const db = require("../models"); /* By default get the index.js */
const { Op } = require("sequelize");

class LevelsController {
  static async getAllLevels(req, res) {
    try {
      const levels = await db.Level.findAll();
      return res.status(200).json(levels);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving levels. - ${err.message}`,
      });
    }
  }

  static async getLevelById(req, res) {
    try {
      const level = await db.Level.findByPk(req.params.id);
      return res.status(200).json(level);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving level. - ${err.message}`,
      });
    }
  }

  static async createLevel(req, res) {
    try {
      const levelData = req.body;
      const level = await db.Level.create(levelData);
      return res.status(201).json(level);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while creating level. - ${err.message}`,
      });
    }
  }

  static async updateLevel(req, res) {
    try {
      const levelNewData = req.body;
      const levelId = req.params.id;

      await db.Level.update(levelNewData, {
        where: { id: levelId },
      });

      res.status(201).json(`Level with id ${levelId} updated.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating level. - ${err.message}`,
      });
    }
  }

  static async deleteLevel(req, res) {
    try {
      const levelId = req.params.id;

      await db.Level.destroy({
        where: { id: levelId },
      });

      res.status(201).json(`Level with id ${levelId} deleted.`);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting level. - ${err.message}`,
      });
    }
  }
}

module.exports = LevelsController;
