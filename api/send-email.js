const express = require("express")
const bodyParser = require('body-parser')
const sgMail =require('@sendgrid/mail')
const app = express()
app.use( bodyParser.json())

app.post('/',(req,res)=>{
  const msg ={
    to:"pollajoel2017@gmail.com",
    from:req.body.email,
    subject:`${req.body.subject} from ${req.body.firstName}`,
    text:req.body.message,
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(msg).then(()=> {
    return res.status(200).json({'message':'email send'})
  })
  .catch(err=>{
    return res.status(400).json({'message':err})
  })




})

module.exports = {
  path:'/api/sendEmail',
  handler:app
}
