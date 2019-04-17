const express = require('express');
const app = express();
const path =require('path');
const bodyParser= require('body-parser');
const adminData = require('./routes/admin');
const products=require('./routes/admin')
const shopRoutes = require('./routes/shop');
const errRoutes = require('./routes/error');
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(errRoutes);
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
});