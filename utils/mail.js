const nodemailer = require("nodemailer");
const config = require("../config");

module.exports = (subject, html, to, done) => {
  const transporter = nodemailer.createTransport({
    service: config.nodemailer.service,
    auth: {
      user: config.nodemailer.email,
      pass: config.nodemailer.password
    }
  });

  const mailOptions = {
    from: config.nodemailer.email,
    to,
    subject,
    html
  };

  transporter.sendMail(mailOptions, done);
};
