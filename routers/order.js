const { Router } = require("express");
const Order = require("../models").order;
const OrderProduct = require("../models").orderproduct;
const Product = require("../models").product;
const Category = require("../models").category;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({ include: [Product] });
    res.send(allOrders);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id);
    const orderByID = await Order.findByPk(orderId, {
      include: [
        {
          model: Product,
          include: [{ model: Category, attributes: ["name"] }],
          attributes: ["name"],
        },
        User,
      ],
    });
    if (!orderByID) {
      res.status(404).send("Order not found");
    } else {
      res.send(orderByID);
    }
  } catch (error) {
    next(error);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const { orderId, productId } = req.body;
//     const addOrder = await OrderProduct.create({ orderId, productId });
//     res.send(addOrder);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/neworder", async (req, res, next) => {
  try {
    const { userId, productIds } = req.body;
    console.log(req.body);
    const newOrder = await Order.create({ userId });
    const newOrderProducts = productIds.map(
      async (id) =>
        await OrderProduct.create({ productId: id, orderId: newOrder.id })
    );
    await Promise.all(newOrderProducts);
    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
