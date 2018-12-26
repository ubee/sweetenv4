const nodemailer = require('nodemailer');
const config = require('../config/mailer');

const transport = nodemailer.createTransport({
  debug: true,
  host: 'smtp.gmail.com',
  secureConnection: false, //also tried secure: false
  port: 587,
  tls: true,
  auth: {
        user:config.USER,
        pass:config.PASS//triple checked, even tried changing it to something very simple (without any special characters)
  }
});
/*



 const	transport = nodemailer.createTransport({
    debug: true,
  host: 'mail.mydomain.com',
  secureConnection: false, //also tried secure: false
  port: 587,
  tls: {cipher:'SSLv3'},
  auth: {
        user: 'ourdomain\\noreply',
        password: 'the password' //triple checked, even tried changing it to something very simple (without any special characters)
  }

		service: 'gmail',

		host: 'smtp.gmail.com',

		port: 587,

		secure: true,

		auth: {

			user: 'pdfgenerator1234@gmail.com',

			pass: 'pdf123456',

		},

	});
*/
  module.exports = {
    sendEmail(from, to, subject, html) {
      return new Promise((resolve, reject) => {
        transport.sendMail({ from, subject, to, html }, (err, info) => {
          if (err) reject(err);
          resolve(info);
        });
      });
    }
  }
