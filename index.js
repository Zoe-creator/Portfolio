

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

import {GMAIL_PASS,GMAIL_USER} from "./services/index"

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.set('port', 3000);

// POST route from contact form
app.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.firstName} ${req.body.lastName} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
  res.redirect("/index.html");
})

// app.use(express.static(path.join(__dirname, 'public')));

// var server = app.listen(app.get('port'), function () {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
// });

// const smtpTrans = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: GMAIL_USER,
//     pass: GMAIL_PASS
//   }

// })

// app.post('/send', function (req, res) {
//   var mailOptions = {
//     from: 'your sender info', // sender address
//     to: GMAIL_USER, // list of receivers
//     subject: 'Request', // Subject line
//     text: `${req.body.firstName} ${req.body.lastName} (${req.body.email}) says: ${req.body.message}`
//   };
//   smtpTrans.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       res.render('contact-failure') // Show a page indicating failure
//     }
//     else {
//       res.render('contact-success') // Show a page indicating success
//     }
//   })

//   res.redirect("/index.html");
// });
