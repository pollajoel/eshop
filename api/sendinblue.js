const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use( bodyParser.json())



app.post('/', (req, res) => {

  const databody = {"updateEnabled":false,"email":"teste@mail.com"}
  //return res.send({body: databody})

  fetch("https://api.sendinblue.com/v3/contacts",{
         method: "POST",
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "api-key": "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"
          },
          data:databody

       }).then(response=> {
         return res.status(200).send({response:response}
         )}).catch(err=>{return res.status(200).send(err)})




});

module.exports = {
  path:'/api/newsletter',
  handler:app
}
