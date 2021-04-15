const stripe = require('stripe')(process.env.STRIPE_PK);
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('.'));
app.use( bodyParser.json())

app.get('/', (req, res) => {
/*
  stripe.orders.list({
    limit: 3,
  }).then(data=>{
    res.send({res:data})
  }).catch(err=>{console.log( err )})

 */
/*
  stripe.customers.create({
    email: "pollajoel2017@gmail.com",
    //currency:'eur',
    //source: token,
  }).then(data=>{res.send({response:data})}).catch(err=>{ console.log( res ); res.send({error:err.message})});



  stripe.charges.create({
    amount: 1000,
    currency:'eur',
    customer: "cus_JI5gLdAYHBo1TN",
  }).then(data=>{res.send({response:data})}).catch(err=>{ res.send({error:err.message})});

stripe.orders.create({
  currency:"eur",
  email:"pollajoel2017@gmail.com",
  items:[{
    quantity: 2
  }]
}).then(data=>{ res.send({ da:data})}).catch(err=>{res.send({error:err.message})})

 */




});

module.exports = {
  path:'/api/listeorder',
  handler:app
}
