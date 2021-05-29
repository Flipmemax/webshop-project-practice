const { Router } = require("express");
const Order = require("../models").order;
const OrderProduct = require("../models").orderproduct;
const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      res.status(400).json("Missing parameters");
    } else {
      const newOrder = await Order.create({
        userId: userId,
      });
      res.send(newOrder);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/:orderId", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const { productId, quantity } = req.body;

    if (!orderId || !productId || !quantity) {
      res.status(400).json("Missing parameters");
    } else {
      const newOrderProduct = await OrderProduct.create({
        orderId: orderId,
        productId: productId,
        quantity: quantity,
      });
      res.json(newOrderProduct);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:orderId/products", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.orderId);

    if (!orderId) {
      res.status(400).json("Missing parameters");
    } else {
      const OrderProducts = await OrderProduct.findAll({
        where: { orderId: orderId },
        include: [product],
      });
      console.log(OrderProducts.products[0]);
      res.json(OrderProducts);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
