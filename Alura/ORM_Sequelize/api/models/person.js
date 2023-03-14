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
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "e-mail is invalid.",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Person",
      paranoid: true,

      /* 
        The defaultScope defines that all queries uses the "WHERE active = TRUE" clause by default.
        IMPORTANT: This affects also the UPDATE statement.
      */
      defaultScope: {
        where: {
          active: true,
        },
      },

      /* We also can define custom scopes for use in the code. */
      scopes: {
        all: { where: {} },
        /* Others */
      },
    }
  );
  return Person;
};
