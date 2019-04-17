const express = require('express');
const router = express.Router();
const path = require('path');
const mainDir = require('../utils/path');
const products = [];

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(mainDir, 'views', 'addProduct.html'))
});

router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title});
    res.redirect('/');
  });
  
exports.routes= router;
exports.products=products;