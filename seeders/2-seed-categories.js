"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      {
        name: "Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Romantic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Documentaries",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
