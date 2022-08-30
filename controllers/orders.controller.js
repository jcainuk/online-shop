const Order = require('../models/order.model');

const addOrder = (req, res) => {
  const { cart } = res.locals;
};

module.exports = { addOrder };
