const express = require("express");
require("dotenv").config();
require("./models/db");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors())
//Routers
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const roleRouter = require("./Routes/role");
const productRouter = require("./routes/products");
const auctionRouter = require("./routes/auction");

// router middleware
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/products", productRouter);
app.use("/roles", roleRouter);
app.use("/auction", auctionRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server works on PORT ${PORT}`);
});
