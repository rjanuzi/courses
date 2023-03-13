"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Classes",
      [
        {
          start_date: new Date(),
          teacher_id: 1,
          level_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: new Date(),
          teacher_id: 2,
          level_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Classes", null, {});
  },
};
