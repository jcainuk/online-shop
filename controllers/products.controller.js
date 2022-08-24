const Product = require('../models/product.model');

const getAllProducts = async (req, res, next) => {
  const products = await Product.findAll();
  res.render('customer/products/all-products');
};
