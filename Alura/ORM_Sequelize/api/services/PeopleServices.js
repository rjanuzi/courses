const Services = require("./Services");
const { Sequelize } = require("sequelize");

class PeopleServices extends Services {
  constructor() {
    super("Person");
  }

  async getAllPersons() {
    /* Default scope for people filters only active */
    return this.db.scope("all").findAll();
  }

  async getActivePersons() {
    /* Default scope for people filters only active */
    return this.db.findAll();
  }

  async getOne(id) {
    return this.db.scope("all").findByPk(id);
  }

  async getByName(name) {
    return this.db.scope("all").findAll({
      where: { name: { [Sequelize.Op.like]: `%${name}%` } },
    });
  }

  async updateOne(data, id, transaction = null) {
    if (transaction == null) {
      return this.db.scope("all").update(data, { where: { id: id } });
    } else {
      return this.db
        .scope("all")
        .update(data, { where: { id: id } }, { transaction: transaction });
    }
  }

  async deleteOne(id) {
    return this.db.scope("all").destroy({ where: { id: id } });
  }

  async restoreOne(id) {
    return this.db.scope("all").restore({ where: { id: id } });
  }
}

module.exports = PeopleServices;
