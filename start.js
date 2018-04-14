const express = require('express');
const hbs = require('hbs');
const path = require('path');
var app =express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{

//res.send('<h1>Hello!</h1>');
res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port,()=>
{
  console.log(`server running on ${port}`);
});
