const Product = require('../models/product.model');

const addCartItem = async (req, res) => {
  const product = await Product.findById(req.body.productId);
  res.locals.cart.addItem();
};

module.exports = {
  addCartItem,
};
