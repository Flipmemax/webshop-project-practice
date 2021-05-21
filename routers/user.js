const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone, address, password } = req.body;
    if (!name || !email || !phone || !address || !password) {
      res.status(400).send("Must provide correct parameters");
    } else {
      const newUser = await User.create(req.body);
      res.send(newUser);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
