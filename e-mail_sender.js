var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mestrelobaoguilhemre@gmail.com',
    pass: 'psbrtrqonqjsy'
  }
});

var mailOptions = {
  from: 'mestrelobaoguilherme@gmail.com',
  to: 'mestrelobaoguiga@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
