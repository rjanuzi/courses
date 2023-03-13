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
      Subscriptions.belongsTo(models.People, { foreignKey: "person_id" });
      Subscriptions.belongsTo(models.Classes);
    }
  }
  Subscription.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};
