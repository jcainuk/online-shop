const Order = require('../models/order.model');
const User = require('../models/user.model');

const addOrder = (req, res) => {
  const { cart } = res.locals;

  const order = new Order(cart);
};

module.exports = { addOrder };
