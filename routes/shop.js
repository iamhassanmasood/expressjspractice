const express = require('express');
const path = require('path');
const router = express.Router();
const mainDir = require('../utils/path');
const adminData = require('./admin')

router.get('/', (req, res)=>{
    console.log("Hello",adminData.products);
    res.sendFile(path.join(mainDir, 'views', 'shop.html' ))
});

module.exports=router;