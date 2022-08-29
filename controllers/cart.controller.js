const Product = require('../models/product.model');

const getCart = (req, res) => {
  res.render('customer/cart/cart');
};

const addCartItem = async (req, res, next) => {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }
  const { cart } = res.locals;

  cart.addItem(product);
  req.session.cart = cart;

  res.status(201).json({
    message: 'Cart updated!',
    newTotalItems: cart.totalQuantity,
  });
};

const updateCartItem = (req, res) => {
  const { cart } = res.locals;

  cart.updateItem(req.body.productId, req.body.quantity);

  req.session.cart = cart;
};

module.exports = {
  addCartItem, getCart, updateCartItem,
};
