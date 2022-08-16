const User = require('../models/user.model');
const authUtil = require('../util/authentication');
const validation = require('../util/validation');
const sessionFlash = require('../util/session-flash');

const getSignup = (req, res) => {
  res.render('customer/auth/signup');
};

const signup = async (req, res, next) => {
  if (!validation.userDetailsAreValid(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city,
  ) || !validation.emailIsConfirmed(req.body.email, req.body['confirm-email'])
  ) {
    sessionFlash.flashDataToSession(req, {
      errorMessage: 'Please check your input. Password must be at least 6 characters long. Postal code mut be at least 6 characters long.',
    }, () => {
      res.redirect('/signup');
    });

    return;
  }

  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city,
  );

  try {
    const existsAlready = await user.existsAlready();

    if (existsAlready) {
      res.redirect('/signup');
      return;
    }

    await user.signup();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/login');
};

const getLogin = (req, res) => {
  res.render('customer/auth/login');
};

const login = async (req, res, next) => {
  const user = new User(req.body.email, req.body.password);
  let existingUser;
  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
    return;
  }

  if (!existingUser) {
    res.redirect('/login');
    return;
  }

  const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

  if (!passwordIsCorrect) {
    res.redirect('/login');
    return;
  }

  authUtil.createUserSession(req, existingUser, () => {
    res.redirect('/');
  });
};

const logout = (req, res) => {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/login');
};

module.exports = {
  getSignup, getLogin, signup, login, logout,
};
