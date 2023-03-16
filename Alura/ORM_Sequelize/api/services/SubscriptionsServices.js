const Services = require("./Services");

class SubscriptionsServices extends Services {
  constructor() {
    super("Subscription");
  }

  async updateByStudent(data, studentId, transaction = null) {
    if (transaction == null) {
      return this.db.update(data, { where: { student_id: studentId } });
    } else {
      return this.db.update(
        data,
        { where: { student_id: studentId } },
        { transaction: transaction }
      );
    }
  }
}

module.exports = SubscriptionsServices;
