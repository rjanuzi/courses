const db = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
    this.db = db[this.modelName];
  }

  async getAll() {
    return this.db.findAll();
  }

  async getOne(id) {
    return this.db.findByPk(id);
  }

  async createOne(data) {
    return this.db.create(data);
  }

  async updateOne(data, id, transaction = null) {
    if (transaction == null) {
      return this.db.update(data, { where: { id: id } });
    } else {
      return this.db.update(
        data,
        { where: { id: id } },
        { transaction: transaction }
      );
    }
  }

  async deleteOne(id) {
    return this.db.destroy({ where: { id: id } });
  }

  async restoreOne(id) {
    return this.db.restore({ where: { id: id } });
  }
}

module.exports = Services;
