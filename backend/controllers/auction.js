const connection = require(`../models/db`);

const addAuction = (req, res) => {
  const product_id = req.params.id;
  const user_id = req.token.user_id;
  const { price } = req.body;
  const query = `INSERT INTO auction (user_id,price,product_id) VALUES (?,?,?);`;
  const data = [user_id, price, product_id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "auction added",
      result: result,
      user_name: req.token.user_name,
    });
  });
};
//////////////////////////////////////

const getAllAuctions = (req, res) => {
  const { id } = req.params;
  const user_id = req.token.user_id;
  // const query = `SELECT auction.price, auction.id FROM auction INNER JOIN user ON auction.user_id=user.id  INNER JOIN products WHERE products.id = auction.product_id WHERE products.id=? AND products.user_id=? ORDER BY auction.id DESC `;
  const query = `SELECT auction.price, auction.id FROM auction JOIN user ON auction.user_id=user.id JOIN products ON auction.product_id = products.id   WHERE auction.product_id=? AND products.user_product_id=?`;
  const data = [id,user_id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    }

    res.status(200).json({
      success: true,
      message: "All the Auctions",
      result,
    });
  });
};

module.exports = { addAuction, getAllAuctions };
