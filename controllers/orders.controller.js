const Order = require('../models/order.model');
const User = require('../models/user.model');

const addOrder = async (req, res, next) => {
  const { cart } = res.locals;

  let userDocument;
  try {
    userDocument = await User.findById(res.locals.uid);
  } catch (error) {
    return next(error);
  }

  const order = new Order(cart, userDocument);

  try {
    await order.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/orders');
};

module.exports = { addOrder };
