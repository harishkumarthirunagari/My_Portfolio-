const express = require('express');
const hbs = require('hbs');

var app =express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{

//res.send('<h1>Hello!</h1>');
res.send('index.html');

app.listen(port,()=>
{
  console.log(`server running on ${port}`)
});
