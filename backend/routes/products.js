const express = require("express");
const { addProduct, getAllProducts, getProductById } = require("../controllers/products");

const { authentication } = require("../middleware/authentication");

const productRouter = express.Router();

productRouter.post("/", authentication,addProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById)

module.exports = productRouter;
