const Product = require('../models/product.model');

const addCartItem = async (req, res, next) => {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }

  res.locals.cart.addItem(product);
};

module.exports = {
  addCartItem,
};
