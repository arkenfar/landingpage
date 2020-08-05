const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
require("dotenv").config();
console.log("Email address", process.env.MAIL_ADDRESS);

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PW,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const email = req.query.email;
    const subject = req.query.subject;
    const message = req.query.message;
    const mailOptions = {
      from: email,
      to: process.env.MAIL_ADDRESS,
      subject: subject, // email subject
      html:
        `           
  <div>             
  From:` +
        email +
        `<br /><br />              
  Email: ` +
        subject +
        `<br /><br />             
  Message:` +
        message +
        `<br /><br />           
  </div>           
  `, // email content in HTML
    };
    // returning result
    console.log("firebase mail details: ", email, subject, message);
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Message Sent");
    });
  });
});
