"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("genre", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING,
        validate: {
          isIn: [["user", "admin", "worker"]],
        },
        defaultValue: "user",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("job_post", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      poster_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      chapter: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deadLine: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      responsibility: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "genre",
          key: "id",
        },
      },
      additionalQuestion: {
        type: Sequelize.ARRAY(Sequelize.JSON), // define the column as an array of JSON objects
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  },
};
