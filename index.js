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

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'zoeli0204@gmail.com',
  subject: 'Offer',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});