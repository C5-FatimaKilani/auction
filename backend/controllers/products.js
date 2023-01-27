const connection = require("../models/db");

const getAllProducts = (req, res) => {
  const query = `SELECT * FROM products WHERE is_deleted=0 `;

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
      message: "All the Products",
      result,
    });
  });
};

/////////////////////////////////////////

const addProduct = (req, res) => {
 
  const { productName, image } = req.body;
const user_product_id = req.token.user_id
  const query = `INSERT INTO products (productName, image, user_product_id) VALUES (?,?,?);`;

  const data = [productName, image, user_product_id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server error",
        err,
      });
    }

    res.status(201).json({
      success: true,
      message: `product added successfully`,
    });
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM products WHERE id=? AND is_deleted=0;`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!result.length) {
      res.status(404).json({
        success: false,
        massage: "The product is Not Found",
      });
    }
    res.status(200).json({
      success: true,
      massage: `The product ${id}`,
      result: result,
    });
  });
};

module.exports = { addProduct, getAllProducts, getProductById };
