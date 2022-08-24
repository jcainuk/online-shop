const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/products');
});

router.get('/401', (req, res) => {
  res.render('shared/401');
});

module.exports = router;
