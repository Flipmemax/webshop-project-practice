"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderproduct.belongsTo(models.order);
      orderproduct.belongsTo(models.product);
      // define association here
    }
  }
  orderproduct.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderproduct",
    }
  );
  return orderproduct;
};
