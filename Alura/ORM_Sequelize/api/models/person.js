"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Class, {
        foreignKey: "teacher_id",
      });
      Person.hasMany(models.Subscription, {
        foreignKey: "student_id",
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Person",
      paranoid: true,
    }
  );
  return Person;
};
