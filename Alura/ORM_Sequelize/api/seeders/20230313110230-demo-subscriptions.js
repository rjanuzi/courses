"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          status: "Active",
          student_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "Active",
          student_id: 2,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "Inactive",
          student_id: 3,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Subscriptions", null, {});
  },
};
