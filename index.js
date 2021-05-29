const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const orderRouter = require("./routers/order");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

app.use(cors());
app.use(jsonParser);

app.use("/order", authMiddleware, orderRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/login", authRouter);

app.listen(port, () => console.log(`Listening on :${port}`));
