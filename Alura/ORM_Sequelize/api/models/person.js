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
        scope: {
          status: "Active" /* Only Active status */,
        },
      });
    }
  }
  Person.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          checkLen: function (data) {
            if (data.length <= 3)
              throw new Error("Name shall have at least 4 characteres.");
          },
        },
      },
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
