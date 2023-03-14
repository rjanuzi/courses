"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subscription.belongsTo(models.Person, { foreignKey: "student_id" });
      Subscription.belongsTo(models.Class, { foreignKey: "class_id" });
    }
  }
  Subscription.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Subscription",
      paranoid: true,
    }
  );
  return Subscription;
};
