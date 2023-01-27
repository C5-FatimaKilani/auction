const connection = require(`../models/db`);

const addRole = (req, res) => {
  const { role } = req.body;

  const query = `INSERT INTO roles (role) VALUES (?)`;
  const data = [role];
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(201).json({
      success: true,
      massage: "Success role created",
      results,
    });
  });
};
const getAllRoles = (req, res) => {
    const query = `SELECT * FROM roles WHERE is_deleted=0 `;
  
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Server Error",
          err,
        });
      }
  
      res.status(200).json({
        success: true,
        message: "All the Roles",
        result,
      });
    });
  };

module.exports = {
  addRole,getAllRoles
};




