const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/products', () => {});

router.get('/products/new', () => {});

module.exports = router;
