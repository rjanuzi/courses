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
      People.hasMany(models.Classes, {
        foreignKey: "teacher_id",
      }); /* This is how set manully the FK column name */
      People.hasMany(models.Subscriptions, {
        foreighKey: "person_id",
      }); /* Will create the person_id in the Classes database. */
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
    }
  );
  return Person;
};
