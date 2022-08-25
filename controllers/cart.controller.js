const Product = require('../models/product.model');

const addCartItem = (req, res) => {
  res.locals.cart.addItem();
};

module.exports = {
  addCartItem,
};
