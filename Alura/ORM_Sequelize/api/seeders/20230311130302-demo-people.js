"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Rafael Barbosa Januzi",
          active: 1,
          email: "rbj@email.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ramona Cardoso Januzi",
          active: 1,
          email: "rcj@email.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ravena Cardoso Januzi",
          active: 1,
          email: "rvj@email.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paula Cristina Cardoso",
          active: 1,
          email: "pcc@email.com",
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Caroline Gatto Girotto",
          active: 1,
          email: "cgg@email.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
