const express = require('express');
const router = express.Router();
const path = require('path');
const mainDir = require('../utils/path');


router.get('/add-product', (req, res) => {
    res.sendFile(path.join(mainDir, 'views', 'addProduct.html'))
});

router.post('/home', (req, res, next) => {
  res.send('<h1> Welcome </h1>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });
  
module.exports= router;
