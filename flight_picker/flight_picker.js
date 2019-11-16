const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const nodemailer = require('nodemailer')

const city = process.argv[2]

const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth:{
        user: 'email@email.com',
        pass: PASSWORD
    }
})

var mailOptions = {
    from: 'email@email.com',
    to: 'email@email.com',
    subject: 'Sending Email using Node.js',
    text: 'text here'
  };

nightmare
  .goto()
  .wait(2000)
  .end()
  .then(
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  )
  .catch(error => {
      console.error("search failed", error)
  })