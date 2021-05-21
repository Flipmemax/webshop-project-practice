const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

app.use(jsonParser);

app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log(`Listening on :${port}`));
