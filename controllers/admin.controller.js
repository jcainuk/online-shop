const Product = require('../models/product.model');

const getProducts = (req, res) => {
  res.render('admin/products/all-products');
};

const getNewProduct = (req, res) => {
  res.render('admin/products/new-product');
};

const createNewProduct = async (req, res) => {
  const product = new Product({
    ...req.body, image: req.file.fileName,
  });

  await product.save();

  res.redirect('/admin/products');
};

module.exports = {
  getProducts, getNewProduct, createNewProduct,
};
