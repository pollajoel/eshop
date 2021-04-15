const express = require('express');
const bodyParser = require("body-parser");
const fetch = require("cross-fetch")
var http = require("http");
const app = express();
app.use( bodyParser.json())

app.get('/',(req,res)=> {

 //

  fetch("https://restcountries.eu/rest/v2/all",{
    headers:{
           "Content-type":"Application/json",
         },
         method:"GET",
  }).then(response => response.json())
  .then(result => res.send({data:result}))
  .catch(error => res.send({err:error.message}));



})
module.exports = {
  path:'/api/countries',
  handler:app
}
