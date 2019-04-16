const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res)=>{
    res.send("<h1>Hello Home Page </h1>")
})
app.use((req, res)=>{
    res.status(404).send("<h1>Error 404 </h1> <br/> <h2> Sorry Dear You are on wrong place in right time</h2>")
})
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})