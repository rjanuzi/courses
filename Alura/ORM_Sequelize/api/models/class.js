"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.Subscriptions);
      Classes.belongsTo(models.People, { foreignKey: "teacher_id" });
      Classes.belongsTo(models.Levels);
    }
  }
  Class.init(
    {
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
