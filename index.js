// const img = ["Calendar",'Cultural-Food', 'collections',  'furniture']
// const github=

// img.forEach(each => {
//   let projects = document.querySelector('.my-projects')
//   const image = new Image();
//   console.log(image)
//   image.src = `./asset/${each}.png`
//   image.alt = `${each}`
//   projects.append(image)

//   // const button =document.createElement('button')
//   // console.log(button)
//   const link = document.createElement('a')
//   link.href = `https://github.com/Zoe-creator/${each}`
//   console.log(link)
//   // button.append(link)
//   link.innerHTML = 'Github'
//   projects.append(link)
// })
"use strict";
let nodemailer = require('nodemailer');

// class User {
//   constructor(firstName, lastName, email, message) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.message = message;
//   }
// }
let firstName=document.getElementById("firstName").value
console.log(firstName)
let lstName = document.getElementById(lastName).value
let email = document.getElementById(email).value
let message=document.getElementById("message")

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: "zoeli0204@gmail.com", // list of receivers
    firstName: firstName, // Subject line
   lastName: lastName, // plain text body
    message:message
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

document.getElementById("submit").addEventListener("click", main)