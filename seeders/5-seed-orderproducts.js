"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("orderproducts", [
      {
        orderId: 1,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("orderproducts", null, {});
  },
};
