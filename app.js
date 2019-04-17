const express = require('express');
const app = express();
const path =require('path');
const bodyParser= require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errRoutes = require('./routes/error');
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errRoutes);
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
});