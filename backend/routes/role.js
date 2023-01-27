const express = require("express");

const { addRole, getAllRoles } = require("../controllers/role");
const roleRouter = express.Router();

roleRouter.post("/", addRole);
roleRouter.get("/",getAllRoles)

module.exports = roleRouter;
