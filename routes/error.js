const express = require('express');
const router = express.Router();
const path = require('path');
const mainDir = require('../utils/path');

router.use((req, res, next)=>{
    res.status(404).sendFile(path.join(mainDir, 'views', '404.html' ))
})
module.exports = router;