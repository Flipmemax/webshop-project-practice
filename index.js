const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();
const userRouter = require("./routers/user");

app.use(jsonParser);

app.use("/users", userRouter);

app.listen(port, () => console.log(`Listening on :${port}`));
