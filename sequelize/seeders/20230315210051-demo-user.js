"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          firstName: "mike",
          lastName: "John",
          email: "johnGammy@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "sarah",
          lastName: "tommy",
          email: "sarahTommy@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert("job_post", [
      {
        id: 3,
        companyName: "Aries",
        address: "num 22, off airport road warri, delta state",
        email: "Areies@gmail.com",
        postion: "front developer",
        description:
          "we are looking for a front end developer who would complete our stack and be available",
        skills: ["python", "js"],
        poster_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        companyName: "shell",
        address: "num 22, off airport road sapele, delta state",
        email: "shell@gmail.com",
        postion: "back developer",
        description:
          "we are looking for a back end developer who would complete our stack and be available",
        skills: ["python", "java", "node js"],
        poster_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user", null, {});
  },
};
