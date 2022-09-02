const updateCartPrices = async (req, res, next) => {
  const { cart } = res.locals;

  await cart.updatePrices();

  // req.session.cart = cart;
  next();
};

module.exports = updateCartPrices;
