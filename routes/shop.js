const express = require('express');
const path = require('path');
const router = express.Router();
const mainDir = require('../utils/path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(mainDir, 'views', 'shop.html' ))
});

module.exports=router;