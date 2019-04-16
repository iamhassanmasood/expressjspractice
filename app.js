const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const PORT = 4000;

app.use(bodyParser.urlencoded());

app.get('/', (req, res)=>{
    res.send("<h1>Welcome Page </h1>")
})

/*
app.use((req, res)=>{
    res.status(404).send("<h1>Error 404 </h1> <br/> <h2> Sorry Dear You are on wrong place in right time</h2>")
})
*/


app.use('/add-prod', (req, res)=>{
    res.send('<form action="/book" method="POST"><input type="text" name="title" /> <button type="submit" >Add Book</button></form>')
})
app.get('/home', (req, res)=>{
    res.send("<h1>Hello from Home Page </h1>")
})
app.use('/book', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})