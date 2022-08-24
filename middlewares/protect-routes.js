const protectRoutes = (req, res, next) => {
  if (!res.locals.isAuth) {
    return res.redirect('/401');
  }
};

module.exports = protectRoutes;
