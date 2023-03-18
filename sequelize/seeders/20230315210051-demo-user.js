"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "genre",
      [
        {
          id: 1,
          name: "DEVELOPER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "WEB DEVELOPER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 5,
          firstName: "mike",
          lastName: "John",
          email: "johnGammy@gmail.com",
          password: "2312334",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          firstName: "sarah",
          lastName: "tommy",
          email: "sarahTommy@gmail.com",
          password: "2312334",
          role: "worker",
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
        poster_id: 5,
        chapter: 1,
        deadLine: new Date(),
        location: "num 25, new erra road, warri delta state",
        responsibility: ["cleaning", "bathing"],
        genre_id: 1,
        // additionalQuestion: [
        //   {
        //     myString: "Hello, World!",
        //     myNumber: 42,
        //     myArray: [1, 2, 3],
        //     myObject: { foo: "bar" },
        //   },
        //   {
        //     myString: "Goodbye, World!",
        //     myNumber: 24,
        //     myArray: [4, 5, 6],
        //     myObject: { foo: "baz" },
        //   },
        // ],
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
        poster_id: 6,
        chapter: 2,
        deadLine: new Date(),
        genre_id: 1,
        // additionalQuestion: [
        //   {
        //     myString: "Hello, World!",
        //     myNumber: 42,
        //     myArray: [1, 2, 3],
        //     myObject: { foo: "bar" },
        //   },
        //   {
        //     myString: "Goodbye, World!",
        //     myNumber: 24,
        //     myArray: [4, 5, 6],
        //     myObject: { foo: "baz" },
        //   },
        // ],
        location: "num 25, new erra road,sapele state",
        responsibility: ["clean code", "testing"],
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
