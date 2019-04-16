const express = require('express');
const app = express();
const PORT = 4000;


app.use('/', (req, res)=>{
    res.send("<h1>Hello Home Page </h1>")
})

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})