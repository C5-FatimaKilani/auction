const express = require("express");
const { addAuction, getAllAuctions } = require("../controllers/auction");
const { authentication } = require("../middleware/authentication");

const auctionRouter = express.Router();

//Routes
auctionRouter.post("/:id",authentication,  addAuction)
auctionRouter.get("/:id",authentication, getAllAuctions)

module.exports = auctionRouter