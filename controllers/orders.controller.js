const { STRIPEKEY } = process.env;
const stripe = require('stripe')(STRIPEKEY);
const Order = require('../models/order.model');
const User = require('../models/user.model');

async function getOrders(req, res, next) {
  try {
    const orders = await Order.findAllForUser(res.locals.uid);
    res.render('customer/orders/all-orders', {
      orders,
    });
  } catch (error) {
    next(error);
  }
}

async function addOrder(req, res, next) {
  let userDocument;
  const { cart } = req.session;
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

  req.session.cart = null;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: [
      'card',
    ],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Dummy',
          },
          unit_amount_decimal: 10.99,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'localhost:3000/success.html',
    cancel_url: 'localhost:3000/cancel.html',
  });

  res.redirect(303, session.url);
}

module.exports = {
  addOrder,
  getOrders,
};
