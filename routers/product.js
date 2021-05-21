const { Router } = require("express");
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    next(error);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    const productByID = await Product.findByPk(productId);
    if (!productByID) {
      res.status(404).send("Product not found");
    } else {
      res.send(productByID);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
