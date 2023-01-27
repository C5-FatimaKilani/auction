const connection = require("../models/db");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const register = async (req, res) => {
  console.log("im reg");
  const { firstName, lastName, email, phoneNum, pass, role_id } = req.body;

  const encryptedPassword = await bcrypt.hash(pass, saltRounds);

  const query = `INSERT INTO user (firstName, lastName, email,phoneNum, pass, role_id) VALUES (?,?,?,?,?,?)`;

  const data = [
    firstName,
    lastName,
    email,
    phoneNum,
    encryptedPassword,
    role_id,
  ];

  connection.query(query, data, (err, result) => {
    
    if (err) {
      return res.status(409).json({
        success: false,
        message: "The email already exists",
        err,
      });
    }
    res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      result,
    });
  });
};

module.exports = { register };
