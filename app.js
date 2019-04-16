const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const PORT = 4000;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use((req, res, next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})