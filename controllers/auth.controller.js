const User = require('../models/user.model');

const getSignup = (req, res) => {
  res.render('customer/auth/signup');
};

const signup = async (req, res) => {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city,
  );

  await user.signup();

  res.redirect('/login');
};

const getLogin = (req, res) => {
  res.render('customer/auth/login');
};

const login = async (req, res) => {
  const user = new User(req.body.email, req.body.password);

  const existingUser = await user.getUserWithSameEmail();

  if (!existingUser) {
    res.redirect('/login');
    return;
  }

  const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

  if (!passwordIsCorrect) {
    res.redirect('/login');
    // eslint-disable-next-line no-useless-return
    return;
  }
};

module.exports = { getSignup, getLogin, signup };
