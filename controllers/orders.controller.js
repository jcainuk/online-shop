const Order = require('../models/order.model');

const addOrder = (req, res) => {
  const { cart } = res.locals;

  const order = new Order(cart);
};

module.exports = { addOrder };
