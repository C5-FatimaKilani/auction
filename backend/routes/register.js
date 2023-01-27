const express = require("express");
const { register } = require("../controllers/register");

const registerRouter = express.Router();

registerRouter.post("/", register);

module.exports = registerRouter;


/*
{
    "firstName": "fatima",
    "lastName": "kilani",
    "email": "fatima@gmail.com",
    "phoneNum": "1234567",
    "pass": "12345678",
    "userTypeId": "1"
}
*/