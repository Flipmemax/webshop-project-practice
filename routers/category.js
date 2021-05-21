const { Router } = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.send(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/:categoryId", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const categoryPage = await Category.findByPk(categoryId, {
      include: [Product],
    });
    if (!categoryPage) {
      res.status(404).send("Category not found");
    } else {
      res.send(categoryPage);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
