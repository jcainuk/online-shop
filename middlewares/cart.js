const initializeCart = (req, res, next) => {
  let cart;

  if (!req.session.cart) {
    cart = new Cart();
  }
};

module.exports = initializeCart;
