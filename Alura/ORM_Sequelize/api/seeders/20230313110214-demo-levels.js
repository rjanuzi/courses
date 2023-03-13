"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Levels",
      [
        {
          level_description: "Beginner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level_description: "Intermediate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level_description: "Advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Levels", null, {});
  },
};
