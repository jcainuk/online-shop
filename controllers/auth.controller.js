const User = require('../models/user.model');

const getSignup = (req, res) => {
  res.render('customer/auth/signup');
};

const signup = (req, res) => {
  const user = new User();
};

const getLogin = (req, res) => {
  // ...
};

module.exports = { getSignup, getLogin, signup };
