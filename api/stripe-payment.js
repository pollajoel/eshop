const stripe = require('stripe')("sk_test_51IcCDmD1iUWzSWcfrbK8fxw12XAQ9UVltpmImmF8fDVNTGJp10KXcGM5kyQSc90jEGxUxrXWyqhdVZpBdujKVuaL00xPQ3l8X1");
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('.'));
app.use( bodyParser.json())

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/', (req, res) => {
  stripe.checkout.sessions.create({
    customer_email: req.body.email,
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['FR','US', 'CA'],
    },
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Livraison',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: req.body.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  }).then(data=>{

    return res.status(200).send({res:data})
  }).catch(err=>{
    res.send( err );});

  //res.json({ id: session.id });
});

module.exports = {
  path:'/api/stripePay',
  handler:app
}
