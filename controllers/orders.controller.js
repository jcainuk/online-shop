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
    line_items: cart.items.map((item) => ({
      price_data: {
        currency: 'gbp',
        product_data: {
          name: item.product.title,
        },
        unit_amount: +item.product.price.toFixed(2) * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://localhost:3000/orders/success',
    cancel_url: 'https://localhost:3000/orders/failure',
  });

  res.redirect(303, session.url);
}

const getSuccess = (req, res) => {
  res.render('customer/orders/success');
};

const getFailure = (req, res) => {
  res.render('customer/orders/failure');
};

module.exports = {
  addOrder,
  getOrders,
  getSuccess,
  getFailure,
};
