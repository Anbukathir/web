
const nodemailer = require('nodemailer');

async function sendMail(email) {
  console.log(email, "sendmail");
  let sender = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    auth: {
      user: "anbukathir567@gmail.com",
      pass: "@nbu@hila",
    },
  });

  sender
    .verify()
    .then(() => console.log("Connected to email server"))
    .catch(() =>
      console.warn(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );

  let recive = await sender.sendMail({
    from: "anbukathir567@gmail.com",
    to: email,
    subject: "sawagger",
    text: "hi praveen"

  })
  console.log("Message sent", recive.messageId);
}

module.exports = sendMail;