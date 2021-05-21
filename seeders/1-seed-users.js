"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        name: "Mordecai Blue Jay",
        email: "regular@show.com",
        phone: 3454345,
        password: "MarGareT",
        address: "Pops' House, Massachus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avatar Aang",
        email: "air@bender.com",
        phone: 23423425,
        password: "moMOandAppA",
        address: "Western Air Temple",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Belcher",
        email: "bobs@burgers.com",
        phone: 123123,
        password: "sleepFartnea",
        address: "Ocean City, New Jersey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
