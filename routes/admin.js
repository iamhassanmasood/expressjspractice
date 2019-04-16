const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res)=>{
    res.send('<form action="/add-product" method="POST"><input type="text" name="title" /> <button type="submit" >Add product</button></form>')
})
router.get('/home', (req, res)=>{
    res.send("<h1>Hello from Home Page </h1>")
})
router.post('/add-product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})
module.exports= router;
