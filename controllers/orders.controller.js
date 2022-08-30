const Order = require('../models/order.model');
const User = require('../models/user.model');

const addOrder = async (req, res) => {
  const { cart } = res.locals;

  const userDocument = await User.findById(res.locals.uid);

  const order = new Order(cart);
};

module.exports = { addOrder };
